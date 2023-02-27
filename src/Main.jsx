import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SafeAppBar from "./components/SafeAppBar";
import Home from "./routes/Home";
import Room from "./routes/Room";
import Sensor from "./routes/Sensor";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAppBar/>

      <NavigationContainer>
        <Stack.Navigator>
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