// Quick Firebase Setup Test
// Run this in browser console to test your Firebase connection

import { db, storage } from './config';

export const testFirebaseSetup = () => {
  console.log('🔥 Testing Firebase Setup...');
  
  // Test if Firebase is initialized
  if (db && storage) {
    console.log('✅ Firebase initialized successfully!');
    console.log('📊 Firestore:', db);
    console.log('📁 Storage:', storage);
    return true;
  } else {
    console.error('❌ Firebase initialization failed!');
    return false;
  }
};

// Test function
testFirebaseSetup();
