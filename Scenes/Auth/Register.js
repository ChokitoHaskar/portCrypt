import { StackActions } from '@react-navigation/routers'
import React, { useState } from 'react'
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { globalStyles } from '../../styles/Global'
import { registration, signUp } from '../API/FirebaseMethod'


const RegisterPage = ({navigation}) => {
    // Setting state untuk pengecekan informasi Login
    const [Email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    // Mereset kolom username dan password
    const emptyState = () => {
        setEmail(''),
        setUsername(''),
        setPassword(''),
        setConfirmPassword('')
    }
    
    // Proses pengecekan informasi Registrasi
    const cekRegister = () => {
        if (!Email) {
            Alert.alert('Email is required', 'Tolong masukkan Email anda ke kolom Email')
        } else if (!Username) {
            Alert.alert('Username is required', 'Tolong masukkan Username anda ke kolom Username')
        } else if (!Password) {
            Alert.alert('Password is required', 'Tolong masukkan Password anda ke kolom password')
        } else if (!ConfirmPassword) {
            Alert.alert('Confirm Password is required', 'Tolong masukkan ulang Password anda ke kolom password')
        } else if (ConfirmPassword != Password) {
            Alert.alert('Password does not match', 'Tolong masukkan ulang Password anda ke kolom password')
        } else {
            signUp(
                Email,
                Username,
                Password
            )
            navigation.replace('Loading')
            emptyState()
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={globalStyles.authBase}>
                <View style={[ style.div, {flex:2, justifyContent:'center'} ]}>
                    <Text style={{ color:'white', fontSize:30}}>Welcome, to Port-Crypt !</Text>
                </View>
                <View style={[ style.div, {flex:3, justifyContent:'space-evenly'} ]}>
                    <View style={[style.div,{marginVertical:30}]}>
                        <Text style={globalStyles.authText}>E-MAIL</Text>
                        <TextInput value={Email}
                                   onChangeText={(Email) => setEmail(Email)}
                                   style={globalStyles.authInput}
                                   keyboardType='email-address' />
                    </View>
                    <View style={[style.div,{marginVertical:30}]}>
                        <Text style={globalStyles.authText}>USERNAME</Text>
                        <TextInput value={Username}
                                   onChangeText={(Username) => setUsername(Username)}
                                   style={globalStyles.authInput} />
                    </View>
                    <View style={[style.div,{marginVertical:30}]}>
                        <Text style={globalStyles.authText}>PASSWORD</Text>
                        <TextInput secureTextEntry={true}
                                   value={Password}
                                   onChangeText={(Password) => setPassword(Password)}
                                   style={globalStyles.authInput}/>
                    </View>
                    <View style={[style.div,{marginVertical:30}]}>
                        <Text style={globalStyles.authText}>CONFIRM PASSWORD</Text>
                        <TextInput secureTextEntry={true}
                                   value={ConfirmPassword}
                                   onChangeText={(ConfirmPassword) => setConfirmPassword(ConfirmPassword)}
                                   style={globalStyles.authInput}/>
                    </View>
                </View>
                <View style={[ style.div, {flex:1, justifyContent:'flex-end'} ]}>
                    <TouchableOpacity onPress={cekRegister}>
                        <Text style={ globalStyles.authButton }>Create</Text>
                    </TouchableOpacity>
                </View>
                <View style={[ style.div, {flex:1, justifyContent:'center'} ]}>
                    <TouchableOpacity onPress={()=>{
                        navigation.dispatch(StackActions.replace('LoginPage'))
                    }}>
                        <Text style={{ color:'#048BA8' }}> Sudah memiliki akun Port-Crypt ? </Text>
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

export default RegisterPage