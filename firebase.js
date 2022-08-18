// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDI6hmFGbjHhXNSpt7Ecpw8RDqNImme9fo',
  authDomain: 'lvup-diary.firebaseapp.com',
  projectId: 'lvup-diary',
  storageBucket: 'lvup-diary.appspot.com',
  messagingSenderId: '837617845587',
  appId: '1:837617845587:web:fe26808d54519c2a1f0da6',
  measurementId: 'G-JSC98CVXQR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
