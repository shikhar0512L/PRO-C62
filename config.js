import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN3I6XEm1DOsql2CqJ_IZZ8CKd_c08LYE",
  authDomain: "school-attendance-app-b0e0b.firebaseapp.com",
  databaseURL: "https://school-attendance-app-b0e0b-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-b0e0b",
  storageBucket: "school-attendance-app-b0e0b.appspot.com",
  messagingSenderId: "295744966615",
  appId: "1:295744966615:web:47ed28adc7ef83faa04592",
  measurementId: "G-8DVYC01L7H"
};

firebase.initializeApp(firebaseConfig);

 export default firebase.database()