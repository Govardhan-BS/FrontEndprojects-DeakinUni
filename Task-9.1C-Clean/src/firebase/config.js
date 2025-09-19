import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqXsx9W-vqHEMIUSYxvpYlWqnO8kDkM_M",
  authDomain: "task7-661c0.firebaseapp.com",
  projectId: "task7-661c0",
  storageBucket: "task7-661c0.firebasestorage.app",
  messagingSenderId: "435466419375",
  appId: "1:435466419375:web:85a03f04262fd6bac9e85a",
  measurementId: "G-VQR6VZJP34"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;