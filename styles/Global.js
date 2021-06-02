import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    base: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    authBase: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#19231A'
    },
    input: {
        borderRadius: 3,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '50%',
        height: 25,
        fontSize: 12,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        textAlignVertical:'center'
    },
    authText: {
        color:'white',
        fontSize:20,
        letterSpacing: 1,
        marginBottom:10
    },
    authInput: {
        backgroundColor:'#F0F0F0',
        color:'black',
        width:'75%',
        height:35,
        paddingHorizontal:10,
        letterSpacing:0.5,
        borderRadius:7.5,
    },
    authButton: {
        backgroundColor:'#048BA8',
        letterSpacing: 0.5,
        fontWeight:'500',
        color:'#fff',
        paddingHorizontal:30,
        paddingVertical:10
    }
})