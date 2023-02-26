import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import globalTheme from "../theme/global-theme";

export default function RoomCard({ id, name, image, sensors, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image 
        source={{ uri: image }} 
        style={styles.image} 
      />

      <Text 
        style={styles.title}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 180,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 20,
    elevation: 2,
  },
  image: {
    width: 180,
    height: 240,
  },
  title: {
    paddingTop: 10,
    paddingHorizontal: 10,
    fontSize: globalTheme.fontSizes.titles,
    fontWeight: globalTheme.fontWeights.bold,
    textAlign: 'center',
  },
});