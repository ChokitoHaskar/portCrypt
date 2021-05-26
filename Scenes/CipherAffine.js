import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native'
import { globalStyles } from '../styles/Global'

const affineCipher = () => {
    const [text, setText] = useState('')
    let [key, setKey] = useState('')
    let [key2, setKey2] = useState('')
    let [cipherText, setCipher] = useState()

    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    const Encrypt = () => {
        const textChar = text.split('')
        const textMap = []

        if (parseInt(key2) > 26) {
            key2 = parseInt(key2) % 26
        }

        // Loop sebanyak teks
        for (let index = 0; index < text.length; index++) {
            let letterChar

            if (textChar[index].match(/^[0-9a-zA-Z]+$/)){
                // Loop untuk ngecek char alphabet sama dengan char dari teks
                for (let pos_A = 0; pos_A < alphabet.length; pos_A++) {
                    const charAlphabet = alphabet[pos_A];
                    // Cek char alphabet sama dengan char teks Uppercase
                    if ( charAlphabet === textChar[index] ) {
                        // Mengubah plain text sesuai key
                        letterChar = (parseInt(key) * pos_A) + parseInt(key2)
                        if (letterChar > 25) {
                            letterChar = letterChar % 26
                        }
                        textMap.push(alphabet[letterChar])
                    }
                    // Cek char alphabet sama dengan char teks Lowercase
                    if ( charAlphabet.toLowerCase() === textChar[index] ) {
                        // Mengubah plain text sesuai key
                        letterChar = (parseInt(key) * pos_A) + parseInt(key2)
                        if (letterChar > 25) {
                            letterChar = letterChar % 26
                        }
                        textMap.push(alphabet[letterChar].toLowerCase())
                    }
                }
            }
        }

        let textFinal = textMap.join("")

        setCipher(textFinal)
    }

    const Decrypt = () => {
        const textChar = text.split('')
        const textMap = []

        if (parseInt(key2) > 26) {
            key2 = parseInt(key2) % 26
        }

        // Mencari key A inverse
        let key_I = 0
        while ((key * key_I) % 26 !== 1) {
            if (key % 2 === 0) {
                key_I = key
                break
            } else {
                key_I++
            }
        }

        // Loop sebanyak teks
        for (let index = 0; index < text.length; index++) {
            let letterChar

            if (textChar[index].match(/^[0-9a-zA-Z]+$/)){
                // Loop untuk ngecek char alphabet sama dengan char dari teks
                for (let pos_A = 0; pos_A < alphabet.length; pos_A++) {
                    const charAlphabet = alphabet[pos_A];
                    // Cek char alphabet sama dengan char teks Uppercase
                    if ( charAlphabet === textChar[index] ) {
                        // Mengubah plain text sesuai key
                        letterChar = parseInt(key_I) * (pos_A - parseInt(key2))
                        if (letterChar > 26) {
                            letterChar = letterChar % 26
                        }
                        // Jika hasil dari letterchar negatif
                        while (letterChar < 0) {
                            letterChar = letterChar + 26
                        }
                        textMap.push(alphabet[letterChar])
                    }
                    // Cek char alphabet sama dengan char teks Lowercase
                    if ( charAlphabet.toLowerCase() === textChar[index] ) {
                        // Mengubah plain text sesuai key
                        letterChar = parseInt(key_I) * (pos_A - parseInt(key2))
                        if (letterChar > 26) {
                            letterChar = letterChar % 26
                        }
                        // Jika hasil dari letterchar negatif
                        while (letterChar < 0) {
                            letterChar = letterChar + 26
                        }
                        textMap.push(alphabet[letterChar].toLowerCase())
                    }
                }
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

                <View style={{flexDirection:'row'}}>
                    <View style={{alignItems:'center'}}>
                        <Text>Key A</Text>
                        <TextInput
                            maxLength = {1}
                            keyboardType= 'numeric'
                            style={[globalStyles.input,{width:92.5, marginHorizontal:12.5}]}
                            placeholder='Masukkan kunci disini'
                            onChangeText={setKey}
                            value={key}
                        />
                    </View>
                    <View style={{alignItems:'center'}}>                    
                        <Text>Key B</Text>
                        <TextInput
                            maxLength = {2}
                            keyboardType= 'numeric'
                            style={[globalStyles.input,{width:92.5, marginHorizontal:12.5}]}
                            placeholder='Masukkan kunci disini'
                            onChangeText={setKey2}
                            value={key2}
                        />
                    </View>

                </View>

                <Text>Output</Text>
                <Text style={globalStyles.inputC}> {cipherText} </Text>
                
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={Encrypt}>
                    <View style={[styles.button, {backgroundColor:'#226F54'}]}>
                    <Text style={{color:'white'}}>Encrypt</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Decrypt}>
                    <View style={[styles.button, {backgroundColor:'#87C38F'}]}>
                    <Text>Decrypt</Text>
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

export default affineCipher