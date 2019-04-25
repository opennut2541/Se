import firebase from 'firebase/app';
import firestore from 'firebase/firestore';  
var config = {
    apiKey: "AIzaSyDfNUdaDO_4W97n605dqPaCBgvgAoEJLDo",
    authDomain: "vuese-5b13a.firebaseapp.com",
    databaseURL: "https://vuese-5b13a.firebaseio.com",
    projectId: "vuese-5b13a",
    storageBucket: "vuese-5b13a.appspot.com",
    messagingSenderId: "1088126208662"
  };
  const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})
export default firebaseApp.firestore();