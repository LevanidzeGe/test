// firebase.ts

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTZTmCOnDqfYD3kcQ07YC97hJ5KZV3tc",
  authDomain: "fresh-2025-storage.firebaseapp.com",
  databaseURL:
    "https://fresh-2025-storage-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fresh-2025-storage",
  storageBucket: "fresh-2025-storage.firebasestorage.app",
  messagingSenderId: "289622052541",
  appId: "1:289622052541:web:a56e3772d27604fc0d71d4",
  measurementId: "G-WLD539E4DT",
};

// 🔥 Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

let analytics = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
