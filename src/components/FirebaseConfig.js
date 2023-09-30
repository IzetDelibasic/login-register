import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVe5NHJ7xYDEny-4kub-9-Im7d9qJKf-A",
  authDomain: "emailpasswordlogin-dcf30.firebaseapp.com",
  projectId: "emailpasswordlogin-dcf30",
  storageBucket: "emailpasswordlogin-dcf30.appspot.com",
  messagingSenderId: "685532276650",
  appId: "1:685532276650:web:e00e8315e8965ac25e2dd3"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);