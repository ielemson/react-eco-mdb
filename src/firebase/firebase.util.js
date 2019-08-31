//import firebase for storage

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBh9EFN9JfYnqarE1rw1XCO_Ho9V-OsFZY",
    authDomain: "my-fist-project-47595.firebaseapp.com",
    databaseURL: "https://my-fist-project-47595.firebaseio.com",
    projectId: "my-fist-project-47595",
    storageBucket: "my-fist-project-47595.appspot.com",
    messagingSenderId: "582402691150",
    appId: "1:582402691150:web:4fade3fe0fcdb40e"
};
//initialize the config object
firebase.initializeApp(firebaseConfig);

//we are exporting the auth /firestore to be usable elsewhere
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//setting up the google authentication
const provider = new firebase.auth.GoogleAuthProvider();


//setup the google popup when ever we want to use the google auth
provider.setCustomParameters({ prompt: 'select_account' });

//selecting the type of popup we need:google popup
export const LoginWithGoogle = () => auth.signInWithPopup(provider);

//export the whole module
export default firebase;

