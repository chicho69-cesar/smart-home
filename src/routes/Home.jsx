import { View, StyleSheet } from "react-native";
import CompleterSpace from "../components/CompleterSpace";
import RoomsList from "../components/RoomsList";
import SensorsList from "../components/SensorsList";
import SmartHomeLogo from "../components/SmartHomeLogo";
import globalTheme from "../theme/global-theme";

export default function Home({ navigation }) {
  return <View style={styles.container}>
    <SmartHomeLogo
      title={'Smart Home'}
      subtitle={'Controla tu vida'}
    />

    <RoomsList navigation={navigation} titleSection='Habitaciones'/>
    <SensorsList navigation={navigation}/>
    <CompleterSpace/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});