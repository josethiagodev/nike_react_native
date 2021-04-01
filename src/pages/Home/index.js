import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Header from '../../components/Header';

const { width } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  const listSlider = [
    { key: '1', image: require('../../assets/slider_category_2.png') },
    { key: '2', image: require('../../assets/slider_category_3.png') },
  ]

  function SliderHome({ image }) {
    return (
      <View style={styles.sliderHome}>
        <TouchableOpacity 
          style={styles.containerSlider} 
          onPress={ () => navigation.navigate('ListProducts') }
        >
          <Image 
            source={image}
            style={styles.imageSlider}
            resizeMode="cover" 
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.pageLogin}>

      <View style={styles.header}>
        <Header />
      </View>

      <ScrollView style={styles.main} vertical showsVerticalScrollIndicator={false}>
        
        <View style={styles.section}>
          <FlatList 
            horizontal 
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (item) => item.key }
            data={listSlider}
            renderItem={ ({ item }) => <SliderHome image={item.image} /> }
          />
        </View>


        <View style={styles.categories}>
          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts') }
            style={styles.btnCategory} 
          >
            <View style={styles.iconCategory}>
              <Ionicons name="md-shirt" size={25} color="#2d3436" />
            </View>
            <Text style={styles.textCategory}>Camisas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts') }
            style={styles.btnCategory} 
          >
            <View style={styles.iconCategory}>
              <FontAwesome5 name="shoe-prints" size={24} color="#2d3436" />
            </View>
            <Text style={styles.textCategory}>Chuteiras</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts') }
            style={styles.btnCategory} 
          >
            <View style={styles.iconCategory}>
              <FontAwesome name="soccer-ball-o" size={25} color="#2d3436" />
            </View>
            <Text style={styles.textCategory}>Bolas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts') }
            style={styles.btnCategory} 
          >
            <View style={styles.iconCategory}>
              <MaterialCommunityIcons name="bag-personal" size={28} color="#2d3436" />
            </View>
            <Text style={styles.textCategory}>Mochilas</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.article}>
          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts') }
          >
            <Image 
              source={require('../../assets/slider_category_5.png')} 
              style={styles.image}  
            />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts')}
          >
            <Image 
              source={require('../../assets/slider_category_4.png')} 
              style={styles.image}  
            />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={ () => navigation.navigate('ListProducts') }
          >
            <Image 
              source={require('../../assets/slider_category_1.png')} 
              style={styles.image}  
            />
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  pageLogin: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    paddingTop: 24,
  },
  main: {
    width: '100%',
    height: '100%',
  },
  section: {
    width: '100%',
    backgroundColor: 'rgb(242, 201, 76)',
  },
  sliderHome: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
  },
  containerSlider: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: 'auto',
    paddingVertical: 20,
  },
  imageSlider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnCategory: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
  },
  iconCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#dfe6e9',
  },
  textCategory: {
    width: '100%',
    height: 'auto',
    lineHeight: 18,
    marginTop: 4,
    color:'#212529',
    textAlign: 'center',
    fontSize: 13.5,
    fontFamily: 'Oswald_400Regular',
  },
  article: {
    width: '100%',
    height: 'auto',
    paddingBottom: 20,
  },
  image: {
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});