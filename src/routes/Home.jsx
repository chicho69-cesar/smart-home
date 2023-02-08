import { View, Text, StyleSheet, Button } from "react-native";
import { useRealTimeData } from "../hooks/useRealTimeData";

export default function Home() {
  return <View style={styles.container}>
    <Button 
      title="Send data" 
      onPress={() => useRealTimeData("user123", 550)}
    ></Button>
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