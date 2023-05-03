import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import Main from './src/Main';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return <RecoilRoot>
    <StatusBar style='dark'/>
    <Main/>
  </RecoilRoot>;
}
