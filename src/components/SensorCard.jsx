import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function SensorCard({ id, name, functionality, lectures, style, onPress }) {
  const cardStyles = [
    style
  ];

  return <TouchableOpacity style={cardStyles} onPress={onPress}>
    {/*  */}
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  // 
});