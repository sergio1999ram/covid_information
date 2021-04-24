import { Picker } from '@react-native-picker/picker'
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    picker: {
        position: 'absolute',
        top: 20,
        width: Dimensions.get("window").width - 30,
        height: 60,
    },
})
const CountryPicker = ({ countries, selectedCountry, setSelectedCountry, setLoading }) => {
    return (
        countries.length > 0 ? 
        <Picker 
            mode="dropdown"
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) => {
                setLoading(true)
                setSelectedCountry(itemValue)
            }}
            style={styles.picker}
        >
    {
        countries.map(country => <Picker.Item label={country.country} value={country.countryInfo.iso2} key={country.countryInfo.iso3 !== null ? country.countryInfo.iso3 : country.countryInfo.iso2} />)
    }
    </Picker> : null
    )
}

export default CountryPicker