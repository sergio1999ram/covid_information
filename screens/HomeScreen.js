import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CountryPicker from '../components/CountryPicker'
import Confirmed from '../components/Confirmed'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#aeddf5'
    },
    text: {
        fontSize: 16
    }
})

const HomeScreen = () => {
    const [countries, setCountries] = React.useState([])
    const [selectedCountry, setSelectedCountry] = React.useState("")
    const [worldometersData, setWorldometersData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const fetchCountries = async() => {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/`)
        const data = await response.json()
        setCountries(data)
    }

    const fetchInformation = async() => {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`)
        const data = await response.json()
        setWorldometersData(data)
        setLoading(false)
    }

    React.useEffect(() => {
        setLoading(true)
        fetchCountries()
    }, [])

    React.useEffect(() => {
        if( selectedCountry !== "" ){
            fetchInformation()
        }
    }, [selectedCountry])
    return (
        <View style={styles.container}>
            {/* Picker for the country */}
            <CountryPicker countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
            {
                selectedCountry !== "" ?
                    loading === false  ?
                    <View>
                        <Confirmed cases={worldometersData.cases} />
                        <Text> Total cases: {worldometersData.updated} </Text>
                    </View> : null
                : null
            }
        </View>
    )
}

export default HomeScreen