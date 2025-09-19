// Firebase Test File - You can delete this after testing
import { db, storage } from './config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const testFirebase = async () => {
  try {
    console.log('Testing Firebase connection...');
    
    // Test Firestore
    const testData = {
      message: 'Firebase test successful!',
      timestamp: new Date().toISOString()
    };
    
    const docRef = await addDoc(collection(db, 'test'), testData);
    console.log('✅ Firestore test passed! Document ID:', docRef.id);
    
    // Test reading data
    const querySnapshot = await getDocs(collection(db, 'test'));
    console.log('✅ Firestore read test passed! Documents:', querySnapshot.size);
    
    console.log('🎉 Firebase setup is working correctly!');
    return true;
  } catch (error) {
    console.error('❌ Firebase test failed:', error);
    return false;
  }
};

// Uncomment the line below to run the test
// testFirebase();
