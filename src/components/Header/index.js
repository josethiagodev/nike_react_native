import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnMenu}>
          <AntDesign name="menu-fold" size={24} color="#212529" />
        </TouchableOpacity>
        <View style={styles.buttonsGroup}>
          <TouchableOpacity style={styles.btnSearch}>
            <Ionicons name="search" size={24} color="#212529" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}>
            <MaterialCommunityIcons name="cart-outline" size={24} color="#212529" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: 'rgb(242, 201, 76)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    width: '100%',
    height: 'auto',
  },
  buttonsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    width: 'auto',
    height: 'auto',
  },
  btnMenu: {
    width: 'auto',
    height: 'auto',
  },
  btnSearch: {
    width: 'auto',
    height: 'auto',
    marginRight: 12,
  },
  btnCart: {
    width: 'auto',
    height: 'auto',
  },
});