// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeLjyJWOZ-W4AM11qQSxfHmCIj_qHO36s",
  authDomain: "codeanime-app-6af94.firebaseapp.com",
  projectId: "codeanime-app-6af94",
  storageBucket: "codeanime-app-6af94.firebasestorage.app",
  messagingSenderId: "709843536335",
  appId: "1:709843536335:web:626d5328068ff3da6aaaba",
  measurementId: "G-EWGD95F8XR"
};

// init firebase 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
