import { StackActions } from '@react-navigation/routers'
import * as React from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { globalStyles } from '../../styles/Global'

const LoginPage = ({navigation}) => {
    
    const Login = () => {
        navigation.dispatch(StackActions.push('Home'))
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
                        <TextInput style={globalStyles.authInput}/>
                    </View>
                    <View style={style.div}>
                        <Text style={globalStyles.authText}>PASSWORD</Text>
                        <TextInput style={[globalStyles.authInput]}/>
                    </View>
                </View>
                <View style={[ style.div, {flex:1, justifyContent:'flex-end'} ]}>
                    <TouchableOpacity onPress={Login}>
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