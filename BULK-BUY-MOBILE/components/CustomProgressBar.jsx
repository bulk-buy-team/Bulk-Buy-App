import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CustomProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      <Text style={styles.progressText}>{`${Math.round(progress * 100)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    width: "100%",
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#CD3301',
    borderRadius: 10,
  },
  progressText: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    color: '#000',
  },
});

export default CustomProgressBar;
