export const signIn = creds => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase 
            .auth()
            .signInWithEmailAndPassword(creds.mail, creds.password)
            .then((res) => {
                console.log(res);
                dispatch({type: "SIGN_IN"});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: "SIGN_IN_ERROR"}, err);
            })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .signOut()
            .then(()=> {
                dispatch({ type: "SIGN_OUT"})
            })
    }
}

export const signUp = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.mail, creds.password)
            .then(() => {
                dispatch({type: "SIGN_UP"})
            })
            .catch(err => {
                dispatch({type: "SIGN_UP_ERROR"}, err);
            })
    }
}