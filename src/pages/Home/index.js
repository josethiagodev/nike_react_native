import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import CardProduct from '../../components/CardProduct';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <View style={styles.slider}>
          <TouchableOpacity style={styles.buttonBack}>
            <Ionicons name="ios-arrow-back" style={styles.iconBack} />
          </TouchableOpacity>
          <Image 
            style={styles.image} 
            source={require('../../assets/slider_category_1.png')} 
          />
        </View>

        <View style={styles.breadcrumb}>
          <Text style={styles.category}>Tênis</Text>
          <Text style={[ styles.arrowCircle, { color: '#CECECE' } ]}>
            <FontAwesome name="circle" style={styles.iconCircle} />
          </Text>
          <Text style={[ styles.category, { color: '#CECECE' } ]}>Masculino</Text>
          <TouchableOpacity style={styles.btnFilter}>
            <Ionicons name="md-filter-sharp" style={styles.iconFilter} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lineBorder}></View>

      <ScrollView style={styles.contentPage}>
        <Text style={styles.titleLaunch}>Lançamentos</Text>

        <View style={styles.wrapperProduct}>
          <CardProduct 
            img={require('../../assets/product_nike_2.png')}
            cost="R$ 499,00"
            onClick={ () => navigation.navigate('Details') }
          >
            Tênis Nike Revolution 5
          </CardProduct>

          <CardProduct 
            img={require('../../assets/product_nike_3.png')}
            cost="R$ 179,50"
            onClick={ () => navigation.navigate('Details') }
          >
            Nike NBA 2021 - Pré-Venda
          </CardProduct>

          <CardProduct 
            img={require('../../assets/product_nike_4.png')}
            cost="R$ 249,90"
            onClick={ () => navigation.navigate('Details') }
          >
            Nike NBA 2021 - Pré-Venda
          </CardProduct>

          <CardProduct 
            img={require('../../assets/product_nike_5.png')}
            cost="R$ 349,99"
            onClick={ () => navigation.navigate('Details') }
          >
            Nike NBA 2021 - Pré-Venda
          </CardProduct>

          <CardProduct 
            img={require('../../assets/product_nike_6.png')}
            cost="R$ 499,00"
            onClick={ () => navigation.navigate('Details') }
          >
            Nike NBA 2021 - Pré-Venda
          </CardProduct>

          <CardProduct 
            img={require('../../assets/product_nike_1.png')}
            cost="429,90"
            onClick={ () => navigation.navigate('Details') }
          >
            Nike NBA 2021 - Pré-Venda
          </CardProduct>
          
        </View>

      </ScrollView>

    </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: '#FFFFFF',
  },
  banner: {
    width: '100%',
    height: 'auto',
    marginBottom: 10,
  },
  slider: {
    position: 'relative',
    width: '100%',
  },
  buttonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    top: 40,
    left: 15,
    color: '#FFFFFF',
  },
  iconBack: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 200,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 'auto',
    paddingTop: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 17,
  },
  category: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontFamily: 'EncodeSans_700Bold',
    color: '#212529',
  },
  arrowCircle: {
    width: 'auto',
    height: 'auto',
    marginHorizontal: 6,
  },
  iconCircle: {
    fontSize: 8,
    color: '#212529',
  },
  btnFilter: {
    position: 'absolute',
    alignSelf: 'center',
    top: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
  },
  iconFilter: {
    fontSize: 22,
    color: '#8d8d8d',
  },
  lineBorder: {
    width: '100%',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
  },
  contentPage: {
    width: '100%',
  },
  titleLaunch: {
    width: '100%',
    height: 'auto',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'EncodeSans_700Bold',
    color: '#212529',
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
  },
  wrapperProduct: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
		justifyContent: 'center',
    paddingStart: 10,
    paddingEnd: 10,
  },
});