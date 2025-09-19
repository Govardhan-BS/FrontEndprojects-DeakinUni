import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Firebase configuration
// Replace these with your actual Firebase config values from Firebase Console
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Example of what your config should look like:
// const firebaseConfig = {
//   apiKey: "AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz",
//   authDomain: "sit313-enhanced-post-page.firebaseapp.com",
//   projectId: "sit313-enhanced-post-page",
//   storageBucket: "sit313-enhanced-post-page.appspot.com",
//   messagingSenderId: "123456789012",
//   appId: "1:123456789012:web:abcdef1234567890abcdef"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
