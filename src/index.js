import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducer/rootReducer';
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/firebaseConfig"
import {createFirestoreInstance } from "redux-firestore";

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase })));

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({children}) {
  const auth = useSelector(state=> state.firebase.auth);
  if(!isLoaded(auth))
    return (
      <div className="text-center">
        <div 
          className="spinner-grow text-primary"
          style={{width: "7rem", height: "7rem"}}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
    return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
        <BrowserRouter> 
          <App />
        </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
