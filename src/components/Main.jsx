import React from "react"
import Constants from 'expo-constants'
import { Text, View, TextInput } from 'react-native'


const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight,flexGrow: 1 }}>
            <Text> Aplicacion para verificar precios</Text>
            <TextInput></TextInput>
        </View>
    )
}


export default Main