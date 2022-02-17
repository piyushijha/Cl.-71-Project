import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBTnID3b1hzfI_878ZAWvdYHgiuk3kM50c",
    authDomain: "cl-71-project.firebaseapp.com",
    projectId: "cl-71-project",
    storageBucket: "cl-71-project.appspot.com",
    messagingSenderId: "412240293612",
    appId: "1:412240293612:web:2c6bc1e665de451156bfc9"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
