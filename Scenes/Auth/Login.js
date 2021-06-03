import { StackActions } from '@react-navigation/routers'
import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { globalStyles } from '../../styles/Global'
import { signIn } from '../API/FirebaseMethod'

const LoginPage = ({navigation}) => {
    
    // Setting state untuk pengecekan informasi Login
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    // Mereset kolom username dan password
    const emptyState = () => {
        setEmail('')
        setPassword('')
    }

    // Proses pengecekan informasi login
    const cekLogin = () => {
        if (!Email) {
            Alert.alert('Email is required', 'Tolong masukkan email ke kolom username')
        } else if (!Password) {
            Alert.alert('Password is required', 'Tolong masukkan Password ke kolom password')
        } else {
            signIn(
                Email,
                Password
            )
            navigation.replace('Loading')
            emptyState()
        }
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={globalStyles.authBase}>
                <View style={[ style.div, {flex:4, justifyContent:'center'} ]}>
                    <Text style={{ color:'white', fontSize:30}}>Welcome, to Port-Crypt !</Text>
                </View>
                <View style={[ style.div, {flex:2, justifyContent:'space-evenly'} ]}>
                    <View style={style.div}>
                        <Text style={globalStyles.authText}>E-MAIL</Text>
                        <TextInput  value={Email}
                                    onChangeText={Email => setEmail(Email)}
                                    style={globalStyles.authInput}/>
                    </View>
                    <View style={style.div}>
                        <Text style={globalStyles.authText}>PASSWORD</Text>
                        <TextInput  value={Password}
                                    onChangeText={Password => setPassword(Password)}
                                    secureTextEntry={true}
                                    style={[globalStyles.authInput]}/>
                    </View>
                </View>
                <View style={[ style.div, {flex:1, justifyContent:'flex-end'} ]}>
                    <TouchableOpacity onPress={cekLogin}>
                        <Text style={ globalStyles.authButton }>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={[ style.div, {flex:1, justifyContent:'center'} ]}>
                    <TouchableOpacity onPress={() => {
                        navigation.dispatch(StackActions.replace('RegisterPage'))
                    }}>
                        <Text style={{ color:'#048BA8' }}> Tidak memiliki akun Port-Crypt ? </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    ) 
}

const style = StyleSheet.create({
    div: {
        width:'100%',
        alignItems:'center'
    },
})

export default LoginPage