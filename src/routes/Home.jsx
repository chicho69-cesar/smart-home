import { View, StyleSheet } from "react-native";
import RoomsList from "../components/RoomsList";
import SmartHomeLogo from "../components/SmartHomeLogo";
import globalTheme from "../theme/global-theme";

export default function Home({ navigation }) {
  return <View style={styles.container}>
    <SmartHomeLogo/>
    <RoomsList navigation={navigation}/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});