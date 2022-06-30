/* FirebaseConfig.js */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTKa6rFKFw2pu_9B259-hjTrwWX3iAzJ0",
  authDomain: "react-firebase-test-51090.firebaseapp.com",
  projectId: "react-firebase-test-51090",
  storageBucket: "react-firebase-test-51090.appspot.com",
  messagingSenderId: "1053781311602",
  appId: "1:1053781311602:web:6f419899cb9167563002eb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
