import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import { RecoilRoot } from 'recoil';
import { firebaseConfig } from './src/firebase/firebase';
import Main from './src/Main';

export default function App() {
  const config = firebaseConfig;
  initializeApp(config);

  return <RecoilRoot>
    <StatusBar style='dark'/>
    <Main/>
  </RecoilRoot>;
}