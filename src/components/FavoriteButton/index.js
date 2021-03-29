import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function FavoriteButton() {
  return (
    <View style={styles.favoriteContent}>
      <TouchableOpacity style={styles.favoriteButton}>
        <MaterialIcons name="favorite-border" style={styles.iconFavorite} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteContent: {
    flex: 0.20,
    borderRadius: 35,
    textAlign: 'center',
  },
  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  iconFavorite: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: 55,
    lineHeight: 55,
    fontSize: 30,
    color: '#212529',
  },
});