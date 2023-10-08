// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW4doJLiH2sRqP7fETVPH4cQp1Q8kGlYI",
  authDomain: "xterm-fitness.firebaseapp.com",
  projectId: "xterm-fitness",
  storageBucket: "xterm-fitness.appspot.com",
  messagingSenderId: "745110848451",
  appId: "1:745110848451:web:f12bd30c879e9766bdb376",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
