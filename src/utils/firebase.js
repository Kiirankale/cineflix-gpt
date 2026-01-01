import { getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTyd2sJdK9OYBAjqXfmMbGzc2NTm4pM00",
  authDomain: "cineflex-gpt-11f72.firebaseapp.com",
  projectId: "cineflex-gpt-11f72",
  storageBucket: "cineflex-gpt-11f72.firebasestorage.app",
  messagingSenderId: "843148762826",
  appId: "1:843148762826:web:d9e8ae09ce0eb31b8b5e33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();