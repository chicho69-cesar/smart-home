import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ref, onValue } from "firebase/database";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { db } from "./firebase/firebase.js";
import { sensorDataListState } from "./states/sensors.js";
import { sensorsDataState } from "./states/data-sensors.js";
import SafeAppBar from "./components/SafeAppBar";
import Home from "./routes/Home";
import Room from "./routes/Room";
import Sensor from "./routes/Sensor";
import Register from "./routes/Register";
import Login from "./routes/Login";
import { sensorsData } from "./utils/sensors-data.js";

const Stack = createStackNavigator();

const Main = () => {
  const [ sensorDataList, setSensorDataList ] = useRecoilState(sensorDataListState);
  const [ sensorData, setSensorData ] = useRecoilState(sensorsDataState);

  const { sensors } = sensorsData();

  useEffect(() => {
    const startRoute = ref(db, '/');
    onValue(startRoute, snapshot => {
      const info = snapshot.val();
      setSensorDataList(info);

      let newSensors = [];

      sensors.map(s => {
        let sensorAux = { ...s };

        if (s.concrete) {
          sensorAux.lectures[0] = info[s.firebaseName] === 0
            ? 'NO' : 'SI';
        } else {
          sensorAux.lectures[0] = `${ info[s.firebaseName] }`;
        }

        newSensors.push({ ...sensorAux });
      });

      console.log(newSensors);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAppBar/>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />

          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
          />

          <Stack.Screen 
            name="Room" 
            component={Room} 
            options={{ headerShown: false }}
          />

          <Stack.Screen 
            name="Sensor" 
            component={Sensor} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Main;