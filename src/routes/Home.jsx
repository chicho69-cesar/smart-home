import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return <View style={styles.container}>
    <Text style={styles.text}>Hola Mundo!!!</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: '#09f'
  }
});