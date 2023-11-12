import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDov_pGX6rLMUpLFiOSZpzk3yFhNJnLZ1g",
    authDomain: "react-firebase-f3979.firebaseapp.com",
    projectId: "react-firebase-f3979",
    storageBucket: "react-firebase-f3979.appspot.com",
    messagingSenderId: "536325615899",
    appId: "1:536325615899:web:a01c9246c6246f5b90e3be",
    measurementId: "G-8GMG0THTW7"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)