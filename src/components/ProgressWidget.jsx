// import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import AnimatedCircularProgress from 'react-native-circular-progress';

const ProgressWidget = ({ progress }) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={200}
        width={10}
        fill={progress}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        rotation={-360}
        lineCap="round"
        arcSweepAngle={360}
      >
        {(fill) => (
          <View style={styles.innerContainer}>
            <Text style={styles.progressText}>{Math.round(fill)}%</Text>
            <Text style={styles.labelText}>Progress</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    width: '100%',
    marginTop: 16
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#00e0ff',
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d5875',
  },
});

export default ProgressWidget;