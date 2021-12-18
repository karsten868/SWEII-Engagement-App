const admin= require("firebase-admin") 

var serviceAccount = require("C:/Projects/clientServerMerge/classroom-engagement-app-firebase-adminsdk-b6htf-3620fb90c4.json");

const firebase_initialize= admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apikey: "AIzaSyCM3LDH0nnOHDaMu_-e6tckm51YcJ-8aL4",
  authDomain: "classroom-engagement-app.firebaseapp.com",
  projectId: "classroom-engagement-app",
  databaseURL: "https://classroom-engagement-app-default-rtdb.firebaseio.com",
  storageBucket: "classroom-engagement-app.appspot.com",
  messagingSenderId: "811128514359",
  appId: "1:811128514359:web:e685e8fcc8898847f69cb2",
  measurementId: "G-JLQEJEM3QJ"
});

module.exports = firebase_initialize;