import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#9dedec'
    },
    data: {
        width: '100%',
        textAlign: 'center',
        paddingVertical: 20,
        color: '#0e9592',
        fontWeight: '700',
        fontSize: 18
    },
    title: {
        paddingTop: 12,
        fontSize: 16,
        color: '#0e9592',
        fontWeight: '500',
        fontSize: 16
    }
})

const Population = ( {country, population}) => {

    function simplifyNumber(number, decPlaces) {

        decPlaces = Math.pow(10,decPlaces);

        let abbrev = [ "K", "M", "B", "T" ]

        // Go through the array backwards, so we do the largest first
        for (let i = abbrev.length - 1; i >= 0; i--) {

            // Convert array index to "1000", "1000000", etc
            var size = Math.pow(10,(i+1)*3)

            // If the number is bigger or equal do the abbreviation
            if(size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number*decPlaces/size)/decPlaces

                // Handle special case where we round up to the next abbreviation
                if((number == 1000) && (i < abbrev.length - 1)) {
                    number = 1
                    i++
                }

                // Add the letter for the abbreviation
                number += abbrev[i]

                // We are done... stop
                break
            }
        }
        return number;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> { country } population </Text>
            <Text style={styles.data}> { simplifyNumber(population, 2) } </Text>
        </View>
    )
}

export default Population