import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { roomsData } from "../utils/rooms-data";
import RoomCard from "./RoomCard";
import globalTheme from './../theme/global-theme.js';
import { HorizontalList } from "./HorizontalList";

export default function RoomsList({ navigation }) {
  const { rooms } = roomsData();

  return <View style={styles.container}>
    <Text style={styles.title}>Habitaciones</Text>

    <HorizontalList>
      {rooms.map(room => (
        <RoomCard 
          key={room.id}
          id={room.id}
          name={room.name}
          image={room.image}
          sensors={room.sensors}
          onPress={() => navigation.navigate('Room', { id: room.id })}
        />
      ))}
    </HorizontalList>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10
  },
  title: {
    fontSize: globalTheme.fontSizes.titles,
    fontWeight: globalTheme.fontWeights.bold,
    marginBottom: 5,
    marginTop: 15
  },
  scroll: {
    paddingBottom: 15
  }
});