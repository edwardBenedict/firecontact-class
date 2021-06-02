import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCCxxueKUzY2kov0eVR1pb8FFNIhXQCqxY",
  authDomain: "firecontact-6a233.firebaseapp.com",
  projectId: "firecontact-6a233",
  storageBucket: "firecontact-6a233.appspot.com",
  messagingSenderId: "831104255149",
  appId: "1:831104255149:web:0c97d224299979bb0e3224",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
