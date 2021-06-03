import * as firebase from 'firebase'
import 'firebase/firestore'
import { Alert, LogBox } from 'react-native'

LogBox.ignoreLogs(['Setting a timer']);

// Getting data
/* 
export async function get() {
    try {
        const db = firebase.firestore()
        // To check collection info
        await db.collection('users').get().then((collection) => {
            collection.docs.forEach(collection => {
                console.log(collection.data())
            })  
        })   
    } catch (error) {
        Alert.alert("Error Detected : " + error.message)
    }
}
*/

// SignIn
export async function signIn(email, password) {
    try {
        const db = firebase.firestore()
        await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
    } catch (error) {
        Alert.alert("Error Detected : " + error.message)
    }
}

// SignUp
export async function signUp(email, username, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        const currentUser = firebase.auth().currentUser

        const db = firebase.firestore()
        db.collection('users')
        .doc(currentUser.uid)
        .set({
            email: currentUser.email,
            username: username,
            password: password
        })
    } catch (error) {
        Alert.alert("Error Detected : " + error.message)
    }
    
}

// SignOut
export async function loggingOut() {
    try {
        await firebase.auth().signOut()
    } catch (error) {
        Alert.alert("Error Detected : " + error.message)
    }
}