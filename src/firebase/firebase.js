import firebase from "@react-native-firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6p0Lxq6znAL0CZ5fVrHF_0ReEY6KtbYo",
  authDomain: "congalcodeprueba.firebaseapp.com",
  databaseURL: "https://congalcodeprueba-default-rtdb.firebaseio.com",
  projectId: "congalcodeprueba",
  storageBucket: "congalcodeprueba.appspot.com",
  messagingSenderId: "520969330295",
  appId: "1:520969330295:web:2a4432ebaeb46cd4753072"
};

const initializeFirebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    return true;
  } else {
    console.log('Hay un error mi pana');
    return false;
  }
}

export default initializeFirebaseApp;