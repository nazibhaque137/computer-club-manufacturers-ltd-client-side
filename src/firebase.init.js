// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEuT63xsnHZwO4mNi5eC34xsfrIYkTQGQ",
    authDomain: "manufacturer-website-c90c2.firebaseapp.com",
    projectId: "manufacturer-website-c90c2",
    storageBucket: "manufacturer-website-c90c2.appspot.com",
    messagingSenderId: "253391367670",
    appId: "1:253391367670:web:c57374f076a9d1c9f16bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;