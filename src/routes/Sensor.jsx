import { View, StyleSheet, Text } from "react-native";
import SmartHomeLogo from "../components/SmartHomeLogo";
import CompleterSpace from "../components/CompleterSpace";
import ProgressWidget from "../components/ProgressWidget";
import useSensor from "../hooks/useSensor";
import globalTheme from "../theme/global-theme";
import { Lecture } from "../components/Lecture";
import RoomsList from "../components/RoomsList";

export default function Sensor({ navigation, route }) {
  const { id } = route.params;
  const { sensor } = useSensor(id);

  return <View style={styles.container}>
    <SmartHomeLogo
      title={sensor.name}
      subtitle={`Lecturas de ${ sensor.name }`}
    />

    <Lecture
      {...sensor}
    />

    <RoomsList 
      navigation={navigation}
      sensor={id}
      titleSection='Habitaciones que lo emplean'
    />

    <CompleterSpace/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});