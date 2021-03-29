import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function NewsTrends({ name, price }) {

  return (
    <View
      style={styles.scrollProducts}

    >
        <TouchableOpacity
          style={[styles.cardProduct, { marginRight: 0, } ]}
        >
          <Image
            source={require('../../assets/product_nike_2.png')} 
            style={styles.image}
          />
          <View style={styles.information}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.cost}>{price}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollProducts: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardProduct: {
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  image: {
    borderRadius: 8,
  },
  information: {
    flex: 1,
    width: '100%',
    marginTop: 15,
    textAlign: 'left',
  },
  title: {
    width: '100%',
    fontSize: 14.5,
    marginBottom: 4,
    fontFamily: 'EncodeSans_600SemiBold',
    color: '#FFFFFF',
  },
  cost: {
    width: '100%',
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
    color: 'rgb(242, 201, 76)',
  },
});