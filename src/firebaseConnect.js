import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAXlRCPBU0ZrlLn84gpCv5psjzuMKTCtVE",
    authDomain: "notereactjs-67b76.firebaseapp.com",
    databaseURL: "https://notereactjs-67b76.firebaseio.com",
    projectId: "notereactjs-67b76",
    storageBucket: "notereactjs-67b76.appspot.com",
    messagingSenderId: "757418129577",
    appId: "1:757418129577:web:66e701d001acb12e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  export const noteData = firebase.database().ref('tableNote');