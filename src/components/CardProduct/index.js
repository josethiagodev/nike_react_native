import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CardProduct(props) {
  function filterTitle(description) {
    if(description.length < 20) {
      return description;
    }
    return `${description.substring(0, 20)}...`
  }

  return (
    <TouchableOpacity 
      style={styles.cardProduct}
      onPress={props.onClick}
    >
      <Image 
        style={styles.imageProduct} 
        source={props.img} 
      />
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>
          { filterTitle(props.children) }
        </Text>
        <Text style={styles.cardPrice}>
          {props.cost}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardProduct: {
    flexDirection: 'column',
    width: '50%',
    height: 'auto',
    paddingHorizontal: 6,
  },
  imageProduct: {
    width: '100%',
    borderRadius: 8,
  },
  cardHeader: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'left',
  },
  cardTitle: {
    width: '100%',
    height: 'auto',
    fontSize: 14.5,
    fontFamily: 'EncodeSans_600SemiBold',
    color: '#212529',
  },
  cardPrice: {
    width: '100%',
    height: 'auto',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
    color: '#8d8d8d',
  }
});