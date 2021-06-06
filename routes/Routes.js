import * as React from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Home from '../Scenes/Home';
import affineCipher from '../Scenes/CipherAffine'
import shiftCipher from '../Scenes/CipherShift'
import vigenereCipher from '../Scenes/CipherVigenere';
import loginPage from '../Scenes/Auth/Login';
import registerPage from '../Scenes/Auth/Register';
import loadingScreen from '../Scenes/Loading';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeTabs() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerTitleAlign:'center', title: 'Port-Crypt'}}/>
            <Stack.Screen
                    name='ShiftCipher'
                    component={shiftCipher}
                    options={{ title: 'Shift Cipher' }}/>
                <Stack.Screen
                    name='AffineCipher'
                    component={affineCipher}
                    options={{ title: 'Affine Cipher' }}/>
                <Stack.Screen
                    name='VigenereCipher'
                    component={vigenereCipher}
                    options={{ title: 'Vigenere Cipher' }}/>
        </Stack.Navigator>
    )
}

function ProfileTabs() {
    
}

function Root() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeTabs}
                    options={{ tabBarLabel:'Home' }}/>
                <Tab.Screen
                    name="Profile"
                    component={HomeTabs}
                    options={{ tabBarLabel:'Profile' }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function routes() {
    return(
        <NavigationContainer>
            <StatusBar style='light' />
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#A4036F'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle:{
                        fontWeight:'bold'
                    },
                }}
                headerMode='screen'
                initialRouteName='Home'
                >
                <Stack.Screen
                    name='LoginPage'
                    component={loginPage}
                    options={{ headerShown:false }} />
                <Stack.Screen
                    name='RegisterPage'
                    component={registerPage}
                    options={{ headerShown:false }} />
                <Stack.Screen
                    name='Loading'
                    component={loadingScreen}
                    options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root