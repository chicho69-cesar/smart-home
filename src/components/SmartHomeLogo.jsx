import { StyleSheet, Text, View } from "react-native";
import { useHour } from "../hooks/useHour";
import globalTheme from "../theme/global-theme";

export default function SmartHomeLogo() {
  const [ hours, minutes, period ] = useHour();

  return <View style={styles.container}>
    <View>
      <Text style={styles.logo}>Smart Home</Text>
      <Text style={styles.subLogo}>Controla tu vida</Text>
    </View>

    <View>
      <Text style={styles.time}>{ hours }:{ minutes }</Text>
      <Text style={styles.subLogo}>{ period }</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
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
  },
  time: {
    fontSize: 25,
    color: globalTheme.colors.blue.blue500,
    fontWeight: globalTheme.fontWeights.bold
  }
});