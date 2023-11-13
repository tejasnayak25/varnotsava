import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    "apiKey": "AIzaSyDVzYaDTYEqsKXIa17xyGfMgveDDzDVkEI",
    "authDomain": "shi-novus.firebaseapp.com",
    "projectId": "shi-novus",
    "storageBucket": "shi-novus.appspot.com",
    "messagingSenderId": "1001431861023",
    "appId": "1:1001431861023:web:44f047aa4eaf4eda29d22a",
    "measurementId": "G-QK66TY5BML"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { firebaseConfig, auth, provider}