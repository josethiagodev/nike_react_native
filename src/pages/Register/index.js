import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, 
  Text, 
  KeyboardAvoidingView, 
  TextInput, 
  StyleSheet, 
  ImageBackground, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard, 
  TouchableOpacity
} from 'react-native';

import imageRegister from '../../assets/background_login.jpg';

export default function Login() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground source={imageRegister} style={styles.imageRegister}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.boxRegister}>
            <Text style={styles.titleRegister}>
              Registrar sua conta?
            </Text>
            <TextInput placeholder="Digite seu email" style={styles.textInput} />
            <TextInput placeholder="Digite seu nome completo" style={styles.textInput} />
            <TextInput placeholder="Digite sua senha" style={styles.textInput} secureTextEntry />
            <View style={styles.buttonRegister}>
              <TouchableOpacity style={styles.textRegister}onPress={ () => navigation.navigate('Home') }>
                <Text style={styles.textRegister}>Cadastrar agora</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  imageRegister: {
    position: 'relative',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  boxRegister: {
    width: '85%',
    height: 'auto',
    paddingHorizontal: 25,
    paddingTop: 18,
    paddingBottom: 25,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  titleRegister: {
    width: '100%',
    marginBottom: 10,
    textAlign: 'left',
    color: '#212529',
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
    fontSize: 18,
  },
  textInput: {
    height: 45,
    borderColor: "#212529",
    borderWidth: 1,
    paddingHorizontal: 25,
    borderRadius: 35,
    marginBottom: 10,
  },
  buttonRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    backgroundColor: '#212529',
    borderRadius: 35,
  },
  textRegister: {
    color: 'rgb(242, 201, 76)',
    fontSize: 14.5,
    lineHeight: 22,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
  },
});