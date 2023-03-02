import { View, StyleSheet, Text } from "react-native";
import SmartHomeLogo from "../components/SmartHomeLogo";
import globalTheme from "../theme/global-theme";
import useRoom from '../hooks/useRoom.js';
import CompleterSpace from "../components/CompleterSpace";

export default function Room({ route }) {
  const { id } = route.params;
  const { room } = useRoom(id);

  return <View style={styles.container}>
    <SmartHomeLogo
      title={room.name}
      subtitle={`Administra tu ${ room.name }`}
    />

    {/*  */}

    <CompleterSpace/>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.blue.blue100
  }
});