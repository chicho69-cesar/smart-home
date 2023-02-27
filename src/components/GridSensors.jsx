import { StyleSheet } from "react-native";
import globalTheme from "../theme/global-theme";
import { HorizontalList } from "./HorizontalList";
import SensorCard from "./SensorCard";

export default function GridSensors({ sensorsData, navigation }) {
  const itemStyles = [
    styles.itemSensor
  ];

  return <HorizontalList>
    {sensorsData.map(sensor => (
      <SensorCard
        key={sensor.id}
        id={sensor.id}
        name={sensor.name}
        functionality={sensor.functionality}
        lectures={sensor.lectures}
        style={itemStyles}
        onPress={() => {
          console.log(sensor)
          navigation.navigate('Sensor', { id: sensor.id })
        }}
      />
    ))}
  </HorizontalList>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10
  },
  itemSensor: {
    backgroundColor: globalTheme.colors.white.whitePrimary,
    padding: 20,
    marginRight: 16,
    marginBottom: 10,
    width: 165,
    height: 165,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 8
  }
});