// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCDyhH7IiCGoLxKQ_mHBMQb3Giiaiw4C7Y",
//   authDomain: "tecktitans-f8e0e.firebaseapp.com",
//   projectId: "tecktitans-f8e0e",
//   storageBucket: "tecktitans-f8e0e.firebasestorage.app",
//   messagingSenderId: "1008848463861",
//   appId: "1:1008848463861:web:0346572b6d431fbd77a2bc",
//   measurementId: "G-LBE8R2W8J7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import Firebase dependencies
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDyhH7IiCGoLxKQ_mHBMQb3Giiaiw4C7Y",
  authDomain: "tecktitans-f8e0e.firebaseapp.com",
  projectId: "tecktitans-f8e0e",
  storageBucket: "tecktitans-f8e0e.firebasestorage.app",
  messagingSenderId: "1008848463861",
  appId: "1:1008848463861:web:0346572b6d431fbd77a2bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };