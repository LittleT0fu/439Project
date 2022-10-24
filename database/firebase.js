// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnkLQZVL8XvXWqLYbqcEgaVYlpPIqm5gY",
  authDomain: "project---badmintoncourt.firebaseapp.com",
  databaseURL: "https://project---badmintoncourt-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project---badmintoncourt",
  storageBucket: "project---badmintoncourt.appspot.com",
  messagingSenderId: "474863258951",
  appId: "1:474863258951:web:07506c336f3ce7e812d062",
  measurementId: "G-3EN6CMHX6V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);