import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from '../Scenes/Home';
import affineCipher from '../Scenes/CipherAffine'
import shiftCipher from '../Scenes/CipherShift'
import vigenereCipher from '../Scenes/CipherVigenere';
import loginPage from '../Scenes/Auth/Login';
import registerPage from '../Scenes/Auth/Register';
import loadingScreen from '../Scenes/Loading'

const Stack = createStackNavigator()

const appTheme = {
    dark: true,
    colors: {
      primary: '#000000',
      background: '#000000',
      card: '#A4036F',
      text: '#FFFFFF',
      border: '#000000',
      notification: '#000000',
    },
}

function routes() {
    return(
        <NavigationContainer theme={appTheme}>
            <StatusBar style='light' />
            <Stack.Navigator headerMode='screen' initialRouteName='LoginPage'>
                <Stack.Screen name='LoginPage' component={loginPage} options={{ headerShown:false }} />
                <Stack.Screen name='RegisterPage' component={registerPage} options={{ headerShown:false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerTitleAlign:'center', title: 'Port-Crypt'}}/>
                <Stack.Screen name='ShiftCipher' component={shiftCipher} options={{ title: 'Shift Cipher' }}/>
                <Stack.Screen name='AffineCipher' component={affineCipher} options={{ title: 'Affine Cipher' }}/>
                <Stack.Screen name='VigenereCipher' component={vigenereCipher} options={{ title: 'Vigenere Cipher' }}/>
                <Stack.Screen name='UsersTable' component={usersTable} options={{ title: 'Users Table' }}/>
                <Stack.Screen name='Loading' component={loadingScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default routes