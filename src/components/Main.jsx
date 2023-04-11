// Importamos la build de expo/react native
import React from "react"
// Importamos las constantes de expo
import Constants from 'expo-constants'

// Importamos los compnentes que vamos a utilizar en la vista
import { Alert, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import RepositoryList from "./RepositoryList"

const Main = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Text> Aplicacion para verificar precios</Text>
            </TouchableWithoutFeedback>

            <RepositoryList />
            <TextInput></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow:1,
    }
});


export default Main