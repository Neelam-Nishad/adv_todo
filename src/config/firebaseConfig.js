import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCWOoW1RFimmbVOaj-o2YqfuPnz_0Xjcoo",
    authDomain: "innerhourtodo.firebaseapp.com",
    projectId: "innerhourtodo",
    storageBucket: "innerhourtodo.appspot.com",
    messagingSenderId: "231281661180",
    appId: "1:231281661180:web:a586d8726a0f7bea57f379"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;