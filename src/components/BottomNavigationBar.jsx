import { View, StyleSheet } from "react-native";

const BottomNavigationBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#404040',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
});

export default BottomNavigationBar;