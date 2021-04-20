import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityComponent } from 'react-native'

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
        marginVertical: 32,
    },
    title: {
        paddingTop: 12,
        paddingLeft: 12,
    }
})

const ActiveCases = ({ active }) => {
    return(
        <TouchableOpacity onPress={() => console.log("Active pressed")}>
            <View style={styles.container}>
                <Text style={styles.title}> Active Cases</Text>
                <Text style={styles.data}> { active }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ActiveCases