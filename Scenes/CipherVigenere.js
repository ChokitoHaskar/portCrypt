import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native'
import { globalStyles } from '../styles/Global'

const vigenereCipher = () => {
    let [text, setText] = useState('')
    let [key, setKey] = useState('')
    let [cipher, setCipher] = useState('')

    // Convert ke Ciphertext
    const Encrypt = () => {
        const textChar = text.split('')
        let textMap = []
        let keyPos = 0

        for (let index = 0; index < text.length; index++) {
            // Cek apakah pada text terdapat angka atau simbol
            if (textChar[index].match(/^[a-zA-Z]+$/)) {
                // Mencegah undefined error ketika posisi key > panjang key serta mereset posisi key ke awal
                if (keyPos > (key.length-1)) {
                    keyPos = 0
                }
                // Cek apakah pada key terdapat angka atau simbol
                if (key[keyPos].match(/^[a-zA-Z]+$/)) {
                    // Mengubah char text dan key menjadi ascii
                    let ascii = textChar[index].charCodeAt(0)
                    let asciiK = key[keyPos].charCodeAt(0)

                    asciiK = asciiK - 65

                    // Cek apakah Textchar merupakan huruf kapital
                    if (textChar[index] === textChar[index].toUpperCase()) {
                        ascii = (ascii - 65) + asciiK
                        if (ascii > 25) {
                            ascii = ascii % 26
                        }
                        ascii = ascii + 65
                    }
                    // Cek apakah Textchar merupakan huruf kecil
                    if (textChar[index] === textChar[index].toLowerCase()) {
                        ascii = (ascii - 97) + asciiK
                        if (ascii > 25) {
                            ascii = ascii % 26
                        }
                        ascii = ascii + 97
                    }
                    keyPos++

                    // Mengubah ascii menjadi char lagi
                    textMap.push(String.fromCharCode(ascii))
                    let textFinal = textMap.join("")
                    
                    setCipher(textFinal)

                } // Menampilkan alert jika terdapat angka atau simbol 
                else {
                    let textFinal = "Error, input tidak valid"

                    setCipher(textFinal)
                    break
                }
            }
        }
    }

    const Decrypt = () => {
        const textChar = text.split('')
        let textMap = []
        let keyPos = 0

        for (let index = 0; index < text.length; index++) {
            // Cek apakah pada text terdapat angka atau simbol
            if (textChar[index].match(/^[a-zA-Z]+$/)) {
                // Mencegah undefined error ketika posisi key > panjang key serta mereset posisi key ke awal
                if (keyPos > (key.length-1)) {
                    keyPos = 0
                }
                // Cek apakah pada key terdapat angka atau simbol
                if (key[keyPos].match(/^[a-zA-Z]+$/)) {
                    // Mengubah char text dan key menjadi ascii
                    let ascii = textChar[index].charCodeAt(0)
                    let asciiK = key[keyPos].charCodeAt(0)

                    asciiK = asciiK - 65

                    // Cek apakah Textchar merupakan huruf kapital
                    if (textChar[index] === textChar[index].toUpperCase()) {
                        ascii = (ascii - 65) - asciiK
                        console.log('ascii: '+ascii)

                        if (ascii < 0) {
                            ascii = ascii + 26
                        }
                        ascii = ascii + 65
                    }
                    // Cek apakah Textchar merupakan huruf kecil
                    if (textChar[index] === textChar[index].toLowerCase()) {
                        ascii = (ascii - 97) - asciiK
                        console.log('ascii: '+ascii)

                        if (ascii < 0) {
                            ascii = ascii + 26
                        }
                        ascii = ascii + 97
                    }
                    keyPos++

                    // Mengubah ascii menjadi char lagi
                    textMap.push(String.fromCharCode(ascii))
                    let textFinal = textMap.join("")
                    
                    setCipher(textFinal)

                } // Menampilkan alert jika terdapat angka atau simbol 
                else {
                    let textFinal = "Error, input tidak valid"

                    setCipher(textFinal)
                    break
                }
            }
        }
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
                    autoCapitalize='characters'
                    keyboardType='default'
                    style={globalStyles.input}
                    placeholder='Masukkan kunci disini'
                    onChangeText={setKey}
                    value={key}
                />
               
                <Text>Output</Text>
                <Text style={globalStyles.inputC}> {cipher} </Text>
                
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={Encrypt}>
                        <View style={[styles.button, {backgroundColor:'#1E152A'}]}>
                        <Text style={{color:'white'}}>Encrypt</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Decrypt}>
                        <View style={[styles.button, {backgroundColor:'#4E6766'}]}>
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

export default vigenereCipher