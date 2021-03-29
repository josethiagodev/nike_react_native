import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

// Google Fonts
import { useFonts, EncodeSans_600SemiBold, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';

import Routes from './src/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    EncodeSans_600SemiBold, 
    EncodeSans_700Bold, 
    Oswald_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}