import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyD6p0Lxq6znAL0CZ5fVrHF_0ReEY6KtbYo",
  authDomain: "congalcodeprueba.firebaseapp.com",
  databaseURL: "https://congalcodeprueba-default-rtdb.firebaseio.com",
  projectId: "congalcodeprueba",
  storageBucket: "congalcodeprueba.appspot.com",
  messagingSenderId: "520969330295",
  appId: "1:520969330295:web:2a4432ebaeb46cd4753072"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);