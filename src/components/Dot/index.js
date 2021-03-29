import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function Dot(props) {
  return (
    <TouchableOpacity style={[styles.dotColor, { backgroundColor: props.color }]}></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dotColor: {
    width: Dimensions.get('window').width * 0.10,
    height: Dimensions.get('window').width * 0.10,
    borderRadius: Dimensions.get('window').width * 0.10 / 2,
    marginHorizontal: 5,
    elevation: 5,
  },
});