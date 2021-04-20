import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import CountryPicker from '../components/CountryPicker'
import ConfirmedCases from '../components/ConfirmedCases'
import DeathCases from '../components/DeathCases'
import ActiveCases from '../components/ActiveCases'
import RecoveredCases from '../components/RecoveredCases'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#aeddf5',
    },
    text: {
        fontSize: 16
    }, 
    innerContainer: {
        flex: 1,
        marginTop: 30,
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})

const HomeScreen = () => {
    const [countries, setCountries] = React.useState([])
    const [selectedCountry, setSelectedCountry] = React.useState("af")
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
                    <View style={{flex: 0.5, width: Dimensions.get("window").width - 50}}>
                        <View style={styles.innerContainer}>
                            <ConfirmedCases cases={worldometersData.cases} />
                            <DeathCases deaths={worldometersData.deaths}/>
                        </View>
                        <View style={styles.innerContainer}>
                            <ActiveCases active={worldometersData.active} />
                            <RecoveredCases recovered={worldometersData.recovered}/>
                        </View>
                    </View> : null
                : null
            }
        </View>
    )
}

export default HomeScreen