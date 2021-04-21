import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityComponent } from 'react-native'
import CountryPicker from './CountryPicker'

const styles = StyleSheet.create({
    container: {
        width: 160,
        alignItems: 'flex-start',
        backgroundColor: '#daf1ff',
        borderRadius: 15,
    },
    data: {
        color: '#308af6',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 5,
    },
    dataContainer: {
        paddingVertical: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    percentage: {
        color: '#308af6',
        fontWeight: '700',
        fontSize: 14,
        marginTop: 5,
    },
    title: {
        paddingTop: 12,
        paddingLeft: 12,
        color: '#308af6',
        fontWeight: '500',
        fontSize: 16
    }
})

const ActiveCases = ({ country, navigation }) => {
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

    return(
        <TouchableOpacity onPress={() => navigation.navigate("TotalActiveScreen")}>
            <View style={styles.container}>
                <Text style={styles.title}> Active Cases</Text>
                <View style={styles.dataContainer}>
                    <Text style={styles.data}> { simplifyNumber(country.active, 2) }</Text>
                    <Text style={styles.percentage}> { Number(Math.round(((country.active / country.cases) * 100)+'e'+3)+'e-'+3 )}% of total cases </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ActiveCases