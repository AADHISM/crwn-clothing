import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOUIIspR6CDmKWxIIq6ruJfGLoY-fIoW8",
  authDomain: "crwn-clothing-77577.firebaseapp.com",
  projectId: "crwn-clothing-77577",
  storageBucket: "crwn-clothing-77577.appspot.com",
  messagingSenderId: "363211203806",
  appId: "1:363211203806:web:2d59fff72f62030b7d0e4f",
  measurementId: "G-JZ7SQMFPNQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
