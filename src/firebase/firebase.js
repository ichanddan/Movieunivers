import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDCIxpLT2_mfKz98Ml8S0uRqspSVBPtLEw",
  authDomain: "movieunivers-154ff.firebaseapp.com",
  projectId: "movieunivers-154ff",
  storageBucket: "movieunivers-154ff.appspot.com",
  messagingSenderId: "271174305448",
  appId: "1:271174305448:web:bef79ec8126571b58e249d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const movieRef= collection(db,"movie")
export default app;