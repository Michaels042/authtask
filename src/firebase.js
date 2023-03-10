// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnTGhaNw8PMIC3PhgGQ7lA13m9YDCNq1k",
  authDomain: "authtask-a978d.firebaseapp.com",
  projectId: "authtask-a978d",
  storageBucket: "authtask-a978d.appspot.com",
  messagingSenderId: "166661998205",
  appId: "1:166661998205:web:ffb4a76a708ae11a6e5314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
