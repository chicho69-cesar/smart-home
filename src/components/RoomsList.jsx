import { FlatList, ScrollView, Text, View } from "react-native";
import { roomsData } from "../utils/rooms-data";
import RoomCard from "./RoomCard";

export default function RoomsList() {
  const { rooms } = roomsData();

  return <View>
    <Text>Habitaciones</Text>

    <FlatList
      data={rooms}
      ItemSeparatorComponent={() => <Separator/>}
      renderItem={({ item: room }) => (
        <RoomCard { ...room} />
      )}
    />
  </View>;
}

function Separator() {
  return <View></View>;
}