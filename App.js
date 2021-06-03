import * as React from 'react';
import * as firebase from 'firebase';
import keys from './config/keys';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes/Routes';
import globalStyles from './styles/Global';


export default function App() {  
  if (!firebase.apps.length) {
      console.log('connected to firebase')
      firebase.initializeApp(keys.firebaseConfig)
  }

  return(
    <Routes />
  )
}
