import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getFirestore, collection, getDocs, query, orderBy, doc, getDoc, setDoc 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = { projectId: "vfrrrr-33bc4" }; // Thay bằng config đầy đủ của bạn
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, query, orderBy, doc, getDoc, setDoc };