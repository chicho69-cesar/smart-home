import { View, StyleSheet, Text } from "react-native";
import SmartHomeLogo from "../components/SmartHomeLogo";
import globalTheme from "../theme/global-theme";
import useRoom from '../hooks/useRoom.js';
import LightLed from "../components/LightLed";
import CompleterSpace from "../components/CompleterSpace";
import SensorsList from "../components/SensorsList";

export default function Room({ navigation, route }) {
  const { id } = route.params;
  const { room } = useRoom(id);

  return <View style={styles.container}>
    <SmartHomeLogo
      title={room.name}
      subtitle={`Administra tu ${ room.name }`}
    />

    <LightLed id={id}/>

    <SensorsList 
      navigation={navigation} 
      roomSensors={room.sensors}
      titleSection='Sensores de la habitación'
    />

    <CompleterSpace/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});