import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBGNVFPsQApjet4KwirfL2ddNOeHhOJoI0',
  authDomain: 'docs-c5184.firebaseapp.com',
  projectId: 'docs-c5184',
  storageBucket: 'docs-c5184.appspot.com',
  messagingSenderId: '45089641947',
  appId: '1:45089641947:web:8efd6dde6d21db88c143fe',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db, app };
