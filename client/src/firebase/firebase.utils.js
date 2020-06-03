import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBABKTeRJvjNobw2HYiPpnbn5zfvA4Tl9k",
  authDomain: "online-reservation-portal.firebaseapp.com",
  databaseURL: "https://online-reservation-portal.firebaseio.com",
  projectId: "online-reservation-portal",
  storageBucket: "online-reservation-portal.appspot.com",
  messagingSenderId: "883504950560",
  appId: "1:883504950560:web:111fa770864f1da58a7b45",
  measurementId: "G-LZBX5LY3K4",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
