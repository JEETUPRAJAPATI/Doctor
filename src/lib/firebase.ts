import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoDxiMibYm2SSePoeFYVkdiuhDe8lgGrY",
  authDomain: "doctors-28647.firebaseapp.com",
  projectId: "doctors-28647",
  storageBucket: "doctors-28647.appspot.com",
  messagingSenderId: "562867906378",
  appId: "1:562867906378:web:3f38d62c334aae0a7c43b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;