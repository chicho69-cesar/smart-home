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
        numberOfLines={2}
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
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: globalTheme.fontSizes.titles,
    fontWeight: globalTheme.fontWeights.normal,
    textAlign: 'center',
  },
});