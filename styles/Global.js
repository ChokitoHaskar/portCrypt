import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    base: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2D6EF'
    },
    input: {
        borderRadius: 3,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '50%',
        fontSize: 12,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    inputC: {
        borderRadius: 3,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: '50%',
        paddingVertical: 5,
        fontSize: 12,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
})