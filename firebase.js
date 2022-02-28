import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBGNVFPsQApjet4KwirfL2ddNOeHhOJoI0',
  authDomain: 'docs-c5184.firebaseapp.com',
  projectId: 'docs-c5184',
  storageBucket: 'docs-c5184.appspot.com',
  messagingSenderId: '45089641947',
  appId: '1:45089641947:web:8efd6dde6d21db88c143fe',
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export { db };
