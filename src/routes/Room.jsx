import { View, StyleSheet, Text } from "react-native";
import globalTheme from "../theme/global-theme";

export default function Room({ route }) {
  const { id } = route.params;

  return <View style={styles.container}>
    <Text>Hello World {id}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});