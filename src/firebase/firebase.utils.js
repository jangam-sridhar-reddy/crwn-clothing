import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-2d7AQXvGjogZA3QzaQEnjppyLbca2uE",
  authDomain: "crwn-db-3d80f.firebaseapp.com",
  databaseURL: "https://crwn-db-3d80f.firebaseio.com",
  projectId: "crwn-db-3d80f",
  storageBucket: "crwn-db-3d80f.appspot.com",
  messagingSenderId: "294174346145",
  appId: "1:294174346145:web:8bb91b10d6291c191559e0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
