import { View } from "react-native";
import { Route, Routes } from 'react-router-native';
import Home from "./routes/Home";
import SafeAppBar from "./components/SafeAppBar";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAppBar/>

      <Routes>
        <Route path="/" element={
          <Home/>
        }/>
      </Routes>
    </View>
  );
}

export default Main;