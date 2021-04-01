import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

import FormRegister from '../../components/FormRegister';

import imageLogin from '../../assets/background_login.jpg';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.pageLogin}>
      <ImageBackground style={styles.imageLogin} source={imageLogin}>

        <View style={styles.logotipo}>
          <Image source={require('../../assets/nike-classic.png')} style={styles.imageLogotipo} />
        </View>

        <View style={styles.boxLogin}>
          <FormRegister />
          <TouchableOpacity 
            style={styles.buttonLogin}
            onPress={ () => navigation.navigate('Register') }
          >
            <Text style={styles.textLogin}>Cadastrar conta</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  pageLogin: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  imageLogin: {
    position: 'relative',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  boxLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 25,
    width: '90%',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 20,
    elevation: 5,
  },
  logotipo: {
    position: 'absolute',
    top: 130,
    width: 190,
    height: 110,
    height: 'auto',
    textAlign: 'center',
  },
  imageLogotipo: {
    width: 'auto',
  },
  titleLogin: {
    color: '#212529',
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#212529',
    borderRadius: 35,
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 14.5,
    lineHeight: 22,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
  },
});