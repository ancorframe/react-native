import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfFsoM-vXSi1j9KzDuERmgY5scimkvR5I",
  authDomain: "posts-dfe5b.firebaseapp.com",
  projectId: "posts-dfe5b",
  storageBucket: "posts-dfe5b.appspot.com",
  messagingSenderId: "907059828046",
  appId: "1:907059828046:web:163c061cb7e2422ffefa1f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
