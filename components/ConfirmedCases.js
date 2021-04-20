import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: 150,
        alignItems: 'flex-start',
        backgroundColor: 'lightred',
        borderRadius: 10,
    },
    data: {
        width: '100%',
        textAlign: 'center',
        marginVertical: 32
    },
    title: {
        paddingTop: 12,
        paddingLeft: 12
    }
})

const ConfirmedCases = ({ cases }) => {
    return(
        <TouchableOpacity onPress={() => console.log("Confirmed pressed")}>
            <View style={styles.container}>
                <Text style={styles.title}> Total cases </Text>
                <Text style={styles.data}> { cases }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ConfirmedCases