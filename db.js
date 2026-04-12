import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, collection, onSnapshot, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyApwan_OSFUPQJkDmsbyP5DRoR8U_IZpOo",
    authDomain: "vfrrrr-33bc4.firebaseapp.com",
    projectId: "vfrrrr-33bc4",
    storageBucket: "vfrrrr-33bc4.firebasestorage.app",
    messagingSenderId: "494419821595",
    appId: "1:494419821595:web:969e735c747cf73826a4be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { doc, setDoc, getDoc, collection, onSnapshot, addDoc, serverTimestamp };