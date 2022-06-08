// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt6jQKC5x9VGsnsudffYcSJ-gw1xSV84s",
  authDomain: "inventory-electronics.firebaseapp.com",
  projectId: "inventory-electronics",
  storageBucket: "inventory-electronics.appspot.com",
  messagingSenderId: 324061795812,
  appId: "1:324061795812:web:6655a910480695afbce3f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
