import { StyleSheet, View } from "react-native";

export default function SensorCard({ id, name, functionality, lectures, style }) {
  const cardStyles = [
    styles.card,
    style
  ];

  return <View style={cardStyles}></View>;
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    backgroundColor: 'red'
  }
});