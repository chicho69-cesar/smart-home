import { View, Text, StyleSheet } from "react-native"

export const AppliedRooms = ({ id }) => {
  return <View style={styles.container}>
    <Text style={styles.titleLecture}>Habitaciones donde se emplea</Text>
    <Text>{id}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20
  },
  titleLecture: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});