import { View, Text, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import globalTheme from "../theme/global-theme";

export default function SafeAppBar() {
  return <View style={styles.appBar}></View>;
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: globalTheme.colors.blue.blue100,
    flexDirection: 'row'
  }
});