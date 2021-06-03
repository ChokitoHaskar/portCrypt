import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { globalStyles } from '../styles/Global';

export default function LoadingScreen({ navigation }) {
  useEffect(
     () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('LoginPage');
        }
      });
    }
  );

  return (
    <View style={globalStyles.base}>
      <ActivityIndicator size='large' />
    </View>
  );
}