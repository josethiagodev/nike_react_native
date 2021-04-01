import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function FormRegister() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.contentFormRegister}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.boxFormRegister}>

          <View style={styles.inputForm}>
            <Text style={styles.textLabel}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder="Digite seu email" 
              placeholderTextColor="rgb(242, 201, 76)" 
            />
          </View>
          <View style={styles.inputForm}>
            <Text style={styles.textLabel}>Senha</Text>
            <View style={styles.inputPassword}>
              <TouchableOpacity 
                style={styles.iconPassword}
                onPress={ () => setHidePass(!hidePass) }
              >
                { // Se for true
                  hidePass ? 
                  <FontAwesome name="eye" size={23} color="rgb(242, 201, 76)" />
                  : // Se for false
                  <FontAwesome name="eye-slash" size={23} color="rgb(242, 201, 76)" />
                }
              </TouchableOpacity>
              <TextInput 
                style={styles.input} 
                placeholder="Digite sua senha"
                placeholderTextColor="rgb(242, 201, 76)" 
                value={input}
                onChange={ (text) => setInput(text) }
                secureTextEntry={hidePass} 
              />
            </View>
          </View>
          <View style={styles.buttonEnter}>
            <TouchableOpacity onPress={ () => navigation.navigate('Home') }>
              <Text style={styles.textButtonEnter}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  contentFormRegister: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
  },
  boxFormRegister: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
  inputForm: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginBottom: 10,
  },
  textLabel: {
    width: '100%',
    height: 'auto',
    lineHeight: 17,
    marginBottom: 5,
    textAlign: 'left',
    fontSize: 11,
    textTransform: 'uppercase',
    fontFamily: 'EncodeSans_600SemiBold',
    color: '#212529',
  },
  inputPassword: {
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  iconPassword: {
    zIndex: 3,
    position: 'absolute',
    top: 11,
    right: 20,
    width: 'auto',
    height: 'auto',
  },
  input: {
    width: '100%',
    height: 46,
    borderColor: 'rgb(242, 201, 76)',
    borderWidth: 1,
    paddingHorizontal: 25,
    borderRadius: 35,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Oswald_400Regular',
    color: '#212529',
    fontWeight: '300',
  },
  buttonEnter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderRadius: 35,
    textAlign: 'center',
    backgroundColor: 'rgb(242, 201, 76)',
  },
  textButtonEnter: {
    textAlign: 'center',
    fontSize: 14.5,
    lineHeight: 24,
    textTransform: 'uppercase',
    fontFamily: 'Oswald_400Regular',
    color: '#212529',
  },
});