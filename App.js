import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes/Routes';
import globalStyles from './styles/Global';

export default function App() {
  return(
    <Routes />
  )
}
