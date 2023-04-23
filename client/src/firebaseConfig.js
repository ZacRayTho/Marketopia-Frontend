import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyB3GrSolGNc62D8OJu5-ajH_B8s0iJdJ_k",
  authDomain: "marketopia-32e9a.firebaseapp.com",
  projectId: "marketopia-32e9a",
  storageBucket: "marketopia-32e9a.appspot.com",
  messagingSenderId: "662722479438",
  appId: "1:662722479438:web:e68c81e889d18edac14a1f",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
