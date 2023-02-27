import { View, StyleSheet, Text } from "react-native";
import SmartHomeLogo from "../components/SmartHomeLogo";
import globalTheme from "../theme/global-theme";

export default function Sensor({ route }) {
  const { id } = route.params;

  return <View style={styles.container}>
    <SmartHomeLogo
      title={/* room.name */'id'}
      subtitle={`Conoce tu ${ /* room.name */ 'id' }`}
    />

    <Text>Hello World {id}</Text>
    {/* <Text>Hello World {room.name}</Text> */}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});