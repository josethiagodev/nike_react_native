import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import BuyButton from '../../components/BuyButton';
import FavoriteButton from '../../components/FavoriteButton';
import NewsTrends from '../../components/NewsTrends';

export default function Details({ navigation }) {
  navigation.setOptions({
    headerTitle: 'Detalhes do produto',
  });

  // Lista de Produtos (Novidades/Tendências)
  const productsNewsTrends = [
    { id: 1, title: 'Vapor Max I', cost: 'R$ 299,99', },
    { id: 2, title: 'Evolution II', cost: 'R$ 299,99', },
    { id: 3, title: 'Trender Max II', cost: 'R$ 299,99', },
  ]

  return (
    <ScrollView style={styles.pageDetails}>

      <Image
        source={require('../../assets/product_nike_big.png')} 
        style={styles.imageDetails} 
        resizeMode="cover"
      />

      <View style={styles.information}>
        <Text style={styles.nameProduct}>Tênis Nike Revolution 5</Text>
        <Text style={styles.costProduct}>R$ 279,90</Text>
        
        <View style={styles.dotContainer}>
          <Dot color="#ff9ff3" />
          <Dot color="#273c75" />
          <Dot color="#9c88ff" />
          <Dot color="#00cec9" />
        </View>

        <View style={styles.sizeProduct}>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <SizeButton bgColor="#212529" color="rgb(242, 201, 76)">42</SizeButton>
            <SizeButton>41</SizeButton>
            <SizeButton>40</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>38</SizeButton>
            <SizeButton>37</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.buttonsProduct}>
          <FavoriteButton />
          <BuyButton />
        </View>

        <View style={styles.newsTrends}>
          <Text style={styles.paragraph}>Novidades e Tendências</Text>
          <FlatList
            keyExtractor={ item => item.id }
            horizontal
            data={productsNewsTrends}
            renderItem={({ item }) => <NewsTrends name={item.title} price={item.cost} />}
          />
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageDetails: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageDetails: {
    width: '100%',
  },
  information: {
    flex: 1,
    width: '100%',
    paddingTop: 25,
    paddingLeft: 0,
    paddingRight: 0,
  },
  nameProduct: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    fontFamily: 'EncodeSans_600SemiBold',
    color: '#212529',
  },
  costProduct: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
    color: '#8d8d8d',
  },
  dotContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  sizeProduct: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonsProduct: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    marginTop: 20,
    marginBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  newsTrends: {
    width: '100%',
    backgroundColor: '#212529',
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  paragraph: {
    width: '100%',
    height: 'auto',
    marginBottom: 20,
    paddingHorizontal: 6,
    textAlign: 'left',
    color: '#FFF',
    fontSize: 19,
    fontFamily: 'EncodeSans_600SemiBold',
  },
});