// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARtHnoPcw9M8lgcNyBwMc02qazpMEfXUg",
  authDomain: "trilake-guide-service.firebaseapp.com",
  projectId: "trilake-guide-service",
  storageBucket: "trilake-guide-service.appspot.com",
  messagingSenderId: "294062743636",
  appId: "1:294062743636:web:a14b49d41afd563bcf4dc1",
  measurementId: "G-ZB15HC6PBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
