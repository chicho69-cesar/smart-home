import { StyleSheet, Text, View } from "react-native";
import globalTheme from "../theme/global-theme";
import Clock from "./Clock";

export default function SmartHomeLogo({ title, subtitle }) {
  return <View style={styles.container}>
    <View>
      <Text style={styles.logo}>{title}</Text>
      <Text style={styles.subLogo}>{subtitle}</Text>
    </View>

    <Clock/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gree',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  logo: {
    fontSize: 25,
    color: globalTheme.colors.black.blackPrimary,
    fontWeight: globalTheme.fontWeights.bold
  },
  subLogo: {
    fontSize: globalTheme.fontSizes.body,
    color: globalTheme.colors.black.blackThird,
    fontWeight: globalTheme.fontWeights.thin
  }
});