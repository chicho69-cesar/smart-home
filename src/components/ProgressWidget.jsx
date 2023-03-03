// import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import globalTheme from '../theme/global-theme';
import useSensor from '../hooks/useSensor';
import { sensorsData } from '../utils/sensors-data';

const ProgressWidget = ({ id, name, firebaseName, icon, concrete, lectures, data, progress }) => {
  const getColor = () => {
    if (progress >= 0 && progress < 10) {
      return '#ade8f4';
    } else if (progress >= 10 && progress < 20) {
      return '#90e0ef';
    } else if (progress >= 20 && progress < 30) {
      return '#48cae4';
    } else if (progress >= 30 && progress < 40) {
      return '#00b4d8';
    } else if (progress >= 40 && progress < 50) {
      return '#ffba08';
    } else if (progress >= 50 && progress < 60) {
      return '#faa307';
    } else if (progress >= 60 && progress < 70) {
      return '#f48c06';
    } else if (progress >= 70 && progress < 80) {
      return '#e85d04';
    } else if (progress >= 80 && progress < 90) {
      return '#dc2f02';
    } else {
      return '#d00000';
    }
  }
  
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={200}
        width={12}
        fill={progress}
        tintColor={getColor()}
        backgroundColor={globalTheme.colors.white.whiteSecondary}
        rotation={-360}
        lineCap="round"
        arcSweepAngle={360}
      >
        {(fill) => (
          <View style={styles.innerContainer}>
            <Text style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: getColor()
            }}>{data}</Text>

            <Text style={styles.labelText}>{name}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3d5875',
  },
});

export default ProgressWidget;