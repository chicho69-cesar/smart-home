import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ref, update } from "firebase/database";
import { db } from '../firebase/firebase';
import globalTheme from '../theme/global-theme';
import { useRecoilState } from 'recoil';
import { sensorDataListState } from '../states/sensors';

export default function LightLed({ id }) {
  const [ sensorDataList, setSensorDataList ] = useRecoilState(sensorDataListState);
  const [ isOn, setIsOn ] = useState(false);

  useEffect(() => {
    if (id === 5) {
      let initialState = sensorDataList['led1'] === 1;
      setIsOn(initialState);
    }

    if (id === 2) {
      let initialState = sensorDataList['led2'] === 1;
      setIsOn(initialState);
    }
  }, []);

  const toggleLight = () => {
    setIsOn(!isOn);
    let isOnOff = isOn ? 0 : 1;

    if (id === 5) {
      const auxSensorsData = { ...sensorDataList };
      auxSensorsData['led1'] = isOnOff;
      
      update(
        ref(db, '/'), 
        { ...auxSensorsData }
      )
        .then(() => console.log('Led cambio de estado'))
        .catch(err => console.log(err));
    }

    if (id === 2) {
      const auxSensorsData = { ...sensorDataList };
      auxSensorsData['led2'] = isOnOff;
      
      update(
        ref(db, '/'), 
        { ...auxSensorsData }
      )
        .then(() => console.log('Led cambio de estado'))
        .catch(err => console.log(err));
    }
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