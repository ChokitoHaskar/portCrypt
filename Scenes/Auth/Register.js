import { StackActions } from '@react-navigation/routers'
import * as React from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { globalStyles } from '../../styles/Global'

const RegisterPage = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
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
                        <TextInput style={globalStyles.authInput}/>
                    </View>
                </View>
                <View style={[ style.div, {flex:1, justifyContent:'flex-end'} ]}>
                    <TouchableOpacity>
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