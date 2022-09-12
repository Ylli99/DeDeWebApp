import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARlx8UQDg_FRDB03-vs6Id8Gfqhy9RIjo",
    authDomain: "dede-auth.firebaseapp.com",
    projectId: "dede-auth",
    storageBucket: "dede-auth.appspot.com",
    messagingSenderId: "783257879455",
    appId: "1:783257879455:web:b29f30516fe70469b2b3aa",
    measurementId: "G-4GZWJZWXPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

export {db, app, auth}
