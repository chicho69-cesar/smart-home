import { StyleSheet, Text, View } from "react-native";

export default function RoomCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 25,
    color: '#000'
  }
});