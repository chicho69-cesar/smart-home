import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { ref, onValue } from "firebase/database";
import { db } from "./../firebase/firebase";
import { useEffect, useState } from "react";

export default function Prueba({ navigation }) {
  const [ data, setData ] = useState(null);

  function readData() {
    console.log(data);
  }

  useEffect(() => {
    const startRoute = ref(db, '/');
    onValue(startRoute, snapshot => {
      const info = snapshot.val();
      setData(info);
    });
  }, []);
  
  return <View>
    <Button mode="contained" onPress={readData}>
      Click
    </Button>

    {
      data 
      ? <Text>{data.smoke}</Text>
      : <></>
    }
  </View>;
}