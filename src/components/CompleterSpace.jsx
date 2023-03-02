import { View, StyleSheet } from "react-native";
import globalTheme from "../theme/global-theme";

export default function CompleterSpace() {
  return <View style={styles.spacer}></View>;
}

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    height: 600,
    backgroundColor: globalTheme.colors.blue.blue100
  }
});