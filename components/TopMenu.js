import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 8
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    buttonHistorical: {
        borderRightWidth: 0,
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10,
    },
    buttonPressed: {
        backgroundColor: '#1a70f2',
    },
    buttonNotPressed: {
        backgroundColor: '#DDDDDD'
    },
    buttonMonth: {
        borderLeftWidth: 0,
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10,
    },
    textWeight: {
        fontWeight: '500',
    }
})

const TopMenu = ({ buttonPressed, setButtonPressed }) => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback 
                onPressIn={() => setButtonPressed('historical') }
            >
                <View style={buttonPressed === 'historical' ? [styles.button, styles.buttonHistorical, styles.buttonPressed] : [styles.button, styles.buttonHistorical, styles.buttonNotPressed]}>
                    <Text style={buttonPressed === 'historical' ? styles.textWeight : null}> Historical </Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback 
                onPressIn={() => setButtonPressed('month')}
            >
                <View style={buttonPressed === 'month' ? [styles.button, styles.buttonMonth, styles.buttonPressed] : [styles.button, styles.buttonMonth, styles.buttonNotPressed]}>
                    <Text style={buttonPressed === 'month' ? styles.textWeight : null}> This month </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default TopMenu