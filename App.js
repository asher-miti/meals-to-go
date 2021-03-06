import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import * as firebase from 'firebase';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { Navigation } from './src/infrastructure/navigation/index';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB0yZ_e549Ens22V7uwAhA7jIpYbYn1ZsU',
  authDomain: 'mealstogo-822ec.firebaseapp.com',
  projectId: 'mealstogo-822ec',
  storageBucket: 'mealstogo-822ec.appspot.com',
  messagingSenderId: '429837797764',
  appId: '1:429837797764:web:f99bfa9d18bb7310ec35d1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
