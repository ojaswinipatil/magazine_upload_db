// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5nMK74C-X86gOOaMEwAOFMuNopBFI-_A",
  authDomain: "magazine-upload-database.firebaseapp.com",
  projectId: "magazine-upload-database",
  storageBucket: "magazine-upload-database.firebasestorage.app",
  messagingSenderId: "8836448623",
  appId: "1:8836448623:web:4bf97d3609b0311b2f689a",
  measurementId: "G-M0LK7DNPQ1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);