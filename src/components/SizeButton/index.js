import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SizeButton(props) {
  return (
    <TouchableOpacity style={[styles.sizeContent, { backgroundColor: props.bgColor || '#FFFFFF' } ]}>
      <Text style={[styles.textSize, { color: props.color || '#D9D9D9' } ]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sizeContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 40,
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 1,
  },
  textSize: {
    width: '100%',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    fontFamily: 'EncodeSans_600SemiBold',
    color: '#212529',
  }
});