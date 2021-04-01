import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function BuyButton() {
  return (
    <View style={styles.BuyContent}>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.textButton}>Add no carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BuyContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.80,
    borderRadius: 35,
    textAlign: 'center',
    backgroundColor: 'rgb(242, 201, 76)',
  },
  buyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '75%',
    height: 50,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
    color: '#212529',
  },
});