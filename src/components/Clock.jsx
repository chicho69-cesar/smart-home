import { StyleSheet, Text, View } from "react-native";
import globalTheme from "../theme/global-theme";
import { useState, useEffect } from 'react';

export default function Clock() {
  let [ time, setTime ] = useState({
    hours: ((new Date()).getHours() % 12) < 10 
      ? `0${ ((new Date()).getHours() % 12) }` 
      : `${ ((new Date()).getHours() % 12) }`,
    
    minutes: (new Date()).getMinutes() < 10 
      ? `0${ (new Date()).getMinutes() }` 
      : `${ (new Date()).getMinutes() }`,
    
    period: (new Date()).getHours() >= 12 
      ? 'PM' 
      : 'AM'
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime({
        hours: ((new Date()).getHours() % 12) < 10 
          ? `0${ ((new Date()).getHours() % 12) }` 
          : `${ ((new Date()).getHours() % 12) }`,
        
        minutes: (new Date()).getMinutes() < 10 
          ? `0${ (new Date()).getMinutes() }` 
          : `${ (new Date()).getMinutes() }`,
        
        period: (new Date()).getHours() >= 12 
          ? 'PM' 
          : 'AM'
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <View>
    <Text style={styles.time}>{ time.hours }:{ time.minutes }</Text>
    <Text style={styles.period}>{ time.period }</Text>
  </View>;
}

const styles = StyleSheet.create({
  period: {
    fontSize: globalTheme.fontSizes.body,
    color: globalTheme.colors.black.blackThird,
    fontWeight: globalTheme.fontWeights.thin
  },
  time: {
    fontSize: 25,
    color: globalTheme.colors.blue.blue500,
    fontWeight: globalTheme.fontWeights.bold
  }
});