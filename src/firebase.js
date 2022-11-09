// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXvmO5NpNCkZQMYSj84IttxOIxphAlnbs",
  authDomain: "chillflix-jm.firebaseapp.com",
  projectId: "chillflix-jm",
  storageBucket: "chillflix-jm.appspot.com",
  messagingSenderId: "240212366279",
  appId: "1:240212366279:web:fe15bfe77a625835ab7fe2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
