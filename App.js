import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import AuthenticateUser from './src/firebase/authenticate';
import initializeFirebaseApp from './src/firebase/firebase';
import Main from './src/Main';

export default function App() {
  const isInitialize = initializeFirebaseApp();
  let isAuth = false;
  if (isInitialize) {
    isAuth = AuthenticateUser('congcod256@gmail.com', 'CongalCode256');
  }

  if (isAuth) {
    console.log('Ya se hizo');
  }

  return <>
    <StatusBar style='dark'/>
    <NativeRouter>
      <Main/>
    </NativeRouter>
  </>;
}