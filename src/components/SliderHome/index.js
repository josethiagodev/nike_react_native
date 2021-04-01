import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

import imageItem from '../../assets/slider_category_1.png';

export default function SliderHome() {
  return (
    <View style={styles.sliderHome}>
      <FlatList 
        style={styles.flatSlider} 
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Image 
          source={imageItem} 
          style={styles.imageTouch}  
        />
        <Image 
          source={imageItem} 
          style={styles.imageTouch}  
        />
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderHome: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgb(242, 201, 76)',
  },
  flatSlider: {
    width: '100%',
    height: 200,
  },
  imageTouch: {
    top: 0,
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
});