import React from 'react';
import { LogBox, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { globalStyles } from '../styles/Global'

LogBox.ignoreAllLogs()

const home = ({navigation}) => {
  return(
    <View style={[globalStyles.base, {flexDirection: 'row'}]}>
      <TouchableOpacity onPress={ () => navigation.navigate('ShiftCipher')}>
        <View style={[styles.button, {backgroundColor: '#533A7B'}]}>
          <Text style={{color:'white'}}>Shift</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('AffineCipher')}>
        <View style={[styles.button, {backgroundColor: '#25171A'}]}>
          <Text style={{color:'white'}}>Affine</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => {} }>
        <View style={[styles.button, {backgroundColor: '#004E64'}]}>
          <Text style={{color:'white', fontSize: 12.5}}>Vigenere</Text>
          <Text style={{color:'white', fontSize: 10}}>(WIP)</Text>
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