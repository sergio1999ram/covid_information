import { Picker } from '@react-native-picker/picker'
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    picker: {
        marginTop: 30,
        width: Dimensions.get("window").width - 30,
        height: 60,
    },
    pickerItem: {
        textAlign: 'center'
    }
})
const CountryPicker = ({ countries, selectedCountry, setSelectedCountry }) => {

    return (
        countries.length > 0 ? 
        <Picker 
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
            style={styles.picker}
        >
            <Picker.Item label="-- Select a country" value="" />
    {
        countries.map((country) => country.countryInfo.iso3 === null || country.countryInfo.iso2 === null ? null : <Picker.Item label={country.country} value={country.countryInfo.iso2} key={country.countryInfo.iso3 !== null ? country.countryInfo.iso3 : country.countryInfo.iso2} />)
    }
    </Picker> : null
    )
}

export default CountryPicker