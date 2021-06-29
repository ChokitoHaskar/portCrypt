import React from 'react';
import { LogBox, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { globalStyles } from '../styles/Global'
import * as firebase from 'firebase'
import { loggingOut } from '../Scenes/API/FirebaseMethod'

LogBox.ignoreAllLogs()

const home = ({navigation}) => {

  const logOut = () => {
    loggingOut(),
    navigation.replace('LoginPage')
  }

  return(
    <View style={[globalStyles.base, {flexDirection:'row'}]}>
        <TouchableOpacity onPress={ () => navigation.navigate('ShiftCipher')}>
          <View style={[styles.button, {backgroundColor: '#CC3F0C'}]}>
            <Text style={{color:'white'}}>Shift</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('AffineCipher')}>
          <View style={[styles.button, {backgroundColor: '#9A6D38'}]}>
            <Text style={{color:'white'}}>Affine</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('VigenereCipher') }>
          <View style={[styles.button, {backgroundColor: '#33673B'}]}>
            <Text style={{color:'white', fontSize: 12.5}}>Vigenere</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    borderRadius: 5,
    paddingVertical: 10,
    borderColor: 'black',
    alignItems: 'center',
    marginHorizontal: 2
  },
})

export default home