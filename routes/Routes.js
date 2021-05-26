import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import Home from '../Scenes/Home';
import affineCipher from '../Scenes/CipherAffine'
import shiftCipher from '../Scenes/CipherShift'
import vigenereCipher from '../Scenes/CipherVigenere';

const Stack = createStackNavigator()

function routes() {
    return(
        <NavigationContainer theme={DarkTheme}>
            <StatusBar style='light' />
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ title: 'port-Crypt' }}/>
                <Stack.Screen name='ShiftCipher' component={shiftCipher} options={{ title: 'Shift Cipher' }}/>
                <Stack.Screen name='AffineCipher' component={affineCipher} options={{ title: 'Affine Cipher' }}/>
                <Stack.Screen name='VigenereCipher' component={vigenereCipher} options={{ title: 'Vigenere Cipher' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default routes