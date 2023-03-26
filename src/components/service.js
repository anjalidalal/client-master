import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { store } from "../Redux/Store";
import { getUser } from "../Redux/Action";

const firebaseConfig = {
  apiKey: "AIzaSyDCqmeF0Cud8-XMD5qaPE9-wknBZLr0JVo",
  authDomain: "client-master-aa520.firebaseapp.com",
  projectId: "client-master-aa520",
  storageBucket: "client-master-aa520.appspot.com",
  messagingSenderId: "377409456207",
  appId: "1:377409456207:web:2478d523f92617a2d3823a",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = async () => {
  try {
    const result = await auth.signInWithPopup(provider);
    store.dispatch(
      getUser({
        displayName: result.user.displayName,
        email: result.user.email,
        id: result.user.uid,
        photo: result.user.photoURL,
        phoneNumber: result.user.phoneNumber,
      })
    );
  } catch (error) {
    store.dispatch(getUser(null));
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    store.dispatch(getUser(null));
  } catch (error) {
    console.log(error);
    store.dispatch(getUser(null));
  }
};

export { auth };
