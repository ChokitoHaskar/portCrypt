import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, LogBox , TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/Global'

LogBox.ignoreAllLogs()

const shiftCipher = () => {
  const [text, setText] = useState('')
  const [cipherText, setCipher] = useState()
  let [key, setKey] = useState('')

  // Convert ke Ciphertext
  const Encrypt = () => {
    const textChar = text.split('')
    let textMap = []
    
    for (let index = 0; index < text.length; index++) {
      // Ubah dari char ke ASCII
      let ascii = textChar[index].charCodeAt(0)
      // Cek Key
      if (key > 26) {
        key = key % 26
      }
      // Menggeser ascii sesuai Key
      ascii = ascii + parseInt(key)
      // Cek ada simbol atau tidak pada plaintext
      if (textChar[index].match(/^[0-9a-zA-Z]+$/)) {
        // Cek lowercase
        if (textChar[index] === textChar[index].toLowerCase()) {
          if (ascii > 122) {
            ascii = (ascii % 122) + 96
          } 
        }
        // Cek Uppercase
        if (textChar[index] === textChar[index].toUpperCase()) {
          if (ascii > 90) {
            ascii = ascii % 90 + 64
          }
        }
        
      // Ubah dari ASCII ke char lagi
      textMap.push(String.fromCharCode(ascii))
      } else if (textChar[index] = ' '){
      textMap.push(textChar[index])
      }
    }

    // Join char jadi 1 string
    let textFinal = textMap.join("")

    setCipher(textFinal)
  }

  const Decrypt = () => {
    const textChar = text.split('')
    let textMap = []

    for (let index = 0; index < text.length; index++) {
      let ascii = textChar[index].charCodeAt(0)
      if (key > 26) {
        key = key % 26
      }

      if (textChar[index].match(/^[0-9a-zA-Z]+$/)) {
        if (textChar[index] === textChar[index].toLowerCase()) {
          ascii = ascii - key
          if (ascii < 97) {
            ascii = ascii + 26
          } 
        }
        if (textChar[index] === textChar[index].toUpperCase()) {
            ascii = ascii - key
            if (ascii < 65) {
              ascii = ascii + 26
            }
        }

      textMap.push(String.fromCharCode(ascii))
      } else if (textChar[index] = ' '){
      textMap.push(textChar[index])
      }
    }

    let textFinal = textMap.join("")
    setCipher(textFinal)
  }
  
  return(
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={globalStyles.base}>
        <Text>Masukkan Text</Text>
        <TextInput
          style={globalStyles.input}
          placeholder='Masukkan text disini'
          onChangeText={setText}
          value={text}
        />

        <Text>Masukkan Key</Text>
        <TextInput
          maxLength = {2}
          keyboardType= 'numeric'
          style={globalStyles.input}
          placeholder='Masukkan kunci disini'
          onChangeText={setKey}
          value={key}
        />

        <Text>Output</Text>
        <Text style={globalStyles.inputC}> {cipherText} </Text>
        
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={Encrypt}>
            <View style={[styles.button, {backgroundColor: '#795663'}]}>
              <Text style={{color:'white'}}>Encrypt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Decrypt}>
            <View style={[styles.button, {backgroundColor: '#6C809A'}]}>
              <Text style={{color:'white'}}>Decrypt</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 10
  }
})

export default shiftCipher