import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function SensorCard({ id, name, functionality, icon, lectures, style, onPress }) {
  const cardStyles = [
    style
  ];

  return <TouchableOpacity style={cardStyles} onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 
          name={icon.name} size={32} 
          color={icon.color}
        />

        <View style={styles.status}></View>
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <Text>{lectures[0]}</Text>
      </View>

      <View>
        <FontAwesome5 
          name='power-off' 
          size={18} 
          color="black" 
          style={styles.power}
        />
      </View>
    </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  status: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'green'
  },
  body: {
    width: '100%',
    marginBottom: 6
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  power: {
    color: '#ae2012'
  }
});