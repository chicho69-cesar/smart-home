import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/firebase/firebase';
import Main from './src/Main';

export default function App() {
  const config = firebaseConfig;
  initializeApp(config);

  return <>
    <StatusBar style='dark'/>
    <Main/>
  </>;
}