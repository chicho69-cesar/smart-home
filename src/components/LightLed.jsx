import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import globalTheme from '../theme/global-theme';

export default function LightLed({ id }) {
  const [ isOn, setIsOn ] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Luz de la habitación</Text>

      <Image
        source={isOn ? require('./../../assets/images/image_on.png') : require('./../../assets/images/image_off.png')}
        style={styles.light}
      />

      <TouchableOpacity style={styles.button} onPress={toggleLight}>
        <FontAwesome name={isOn ? 'power-off' : 'plug'} size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: globalTheme.fontSizes.titles,
    fontWeight: globalTheme.fontWeights.bold,
    marginBottom: 5,
    marginTop: 10
  },
  light: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: globalTheme.colors.blue.blue600,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});