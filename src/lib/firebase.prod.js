import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBs-90mOPyDuqWTySgiTu0PfACZGL9NaQA",
    authDomain: "nflix-rct.firebaseapp.com",
    databaseURL: "https://nflix-rct.firebaseio.com",
    projectId: "nflix-rct",
    storageBucket: "nflix-rct.appspot.com",
    messagingSenderId: "849627244355",
    appId: "1:849627244355:web:d6a7581be2b25e05ca71f6",
  };

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
