import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    text: {
        fontSize: 16
    }
})

const SecondScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Second Screen</Text>
        </View>
    )
}

SecondScreen.navigationOptions = () => {
    return {
        title: 'Vaccines',
        headerShown: false
    }
}
export default SecondScreen