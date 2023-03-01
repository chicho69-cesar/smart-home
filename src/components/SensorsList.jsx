import { StyleSheet, View, Text } from "react-native";
import { sensorsData } from "../utils/sensors-data";
import globalTheme from './../theme/global-theme.js';
import GridSensors from "./GridSensors";

export default function SensorsList({ navigation }) {
  const { sensors } = sensorsData();

  return <View style={styles.container}>
    <Text style={styles.title}>Sensores</Text>

    <GridSensors
      sensorsData={sensors}
      navigation={navigation}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 5,
    backgroundColor: globalTheme.colors.blue.blue100
  },
  title: {
    fontSize: globalTheme.fontSizes.titles,
    fontWeight: globalTheme.fontWeights.bold,
    marginBottom: 5,
    marginTop: 15
  },
});