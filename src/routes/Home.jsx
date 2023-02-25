import { View, StyleSheet } from "react-native";
import SmartHomeLogo from "../components/SmartHomeLogo";
import globalTheme from "../theme/global-theme";

export default function Home() {
  return <View style={styles.container}>
    <SmartHomeLogo/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: globalTheme.colors.blue.blue100
  }
});