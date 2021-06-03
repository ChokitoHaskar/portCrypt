import { StackActions } from '@react-navigation/routers'
import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { globalStyles } from '../../styles/Global'
import { login } from '../API/FirebaseMethod'

const LoginPage = ({navigation}) => {
    
    // Setting state untuk pengecekan informasi Login
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    // Mereset kolom username dan password
    const emptyState = () => {
        setUsername('')
        setPassword('')
    }

    // Proses pengecekan informasi login
    const cekLogin = () => {
        if (!Username) {
            Alert.alert('Username is required', 'Tolong masukkan Username ke kolom username')
        } else if (!Password) {
            Alert.alert('Password is required', 'Tolong masukkan Password ke kolom password')
        } else {
            login(
                Username,
                Password
            )
            navigation.dispatch(StackActions.push('Home'))
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
                        <Text style={globalStyles.authText}>USERNAME</Text>
                        <TextInput  value={Username}
                                    onChangeText={setUsername}
                                    style={globalStyles.authInput}/>
                    </View>
                    <View style={style.div}>
                        <Text style={globalStyles.authText}>PASSWORD</Text>
                        <TextInput  value={Password}
                                    onChangeText={setPassword}
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