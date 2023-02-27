import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function SensorCard({ id, name, functionality, lectures, style, onPress }) {
  const cardStyles = [
    style
  ];

  return <TouchableOpacity style={cardStyles} onPress={onPress}>
    <Text>
      <Text>{name}</Text>
      <Ionicons name="md-search" size={24} color="black" />
      <FontAwesome5 name="heart" size={24} color="black" />
    </Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  // 
});