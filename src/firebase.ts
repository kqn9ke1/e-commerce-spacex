// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFZAbyFLyMlFpRye_WDruEXfqffLc4X4I",
  authDomain: "project-with-mentor-a2936.firebaseapp.com",
  projectId: "project-with-mentor-a2936",
  storageBucket: "project-with-mentor-a2936.appspot.com",
  messagingSenderId: "703791788758",
  appId: "1:703791788758:web:b0467184c61a80c6770f77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
