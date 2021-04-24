import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: 160,
        alignItems: 'flex-start',
        borderRadius: 10,
        backgroundColor: '#8ae289'
    },
    data: {
        color: '#169e14',
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 5,      
        textAlign: 'center'
    },
    percentage: {
        color: '#169e14',
        fontWeight: '700',
        fontSize: 14,
        marginTop: 5,
        textAlign: 'center'
    },
    dataContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        paddingTop: 12,
        paddingLeft: 12,
        color: '#169e14',
        fontWeight: '500',
        fontSize: 16
    }
})

const RecoveredCases = ({ country, navigation, dailyTotalData, type }) => {

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
        <TouchableOpacity onPress={() => navigation.navigate("TotalRecoveredScreen", {dailyTotalData: dailyTotalData, type: type})}>
            <View style={styles.container}>
                <Text style={styles.title}> Recovered cases </Text>
                <View style={styles.dataContainer}>
                    <Text style={styles.data}> { simplifyNumber(country.cases, 2) } </Text>
                    <Text style={styles.percentage}> { Number(Math.round(((country.recovered / country.cases) * 100)+'e'+3)+'e-'+3 )}% of total cases</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecoveredCases