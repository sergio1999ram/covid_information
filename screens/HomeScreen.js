import React from 'react'
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import CountryPicker from '../components/CountryPicker'
import TotalCases from '../components/TotalCases'
import DeathCases from '../components/DeathCases'
import ActiveCases from '../components/ActiveCases'
import RecoveredCases from '../components/RecoveredCases'
import Population from '../components/Population'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    activityIndicator: {
        justifyContent: 'center', 
        alignItems: 'center'
    }
})


const HomeScreen = ({ navigation }) => {
    const [countries, setCountries] = React.useState([])
    const [selectedCountry, setSelectedCountry] = React.useState("af")

    //Total data by country
    const [totalDataByCountry, setTotalDataByCountry] = React.useState([])
    
    //Monthly data by country
    const [monthlyDataByCountry, setMonthlyDataByCountry] = React.useState([])

    const [loading, setLoading] = React.useState(true)
    

    const fetchCountries = async() => {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/`)
        const data = await response.json()
        let countries_data = []
        data.map(country => country.countryInfo._id !== null || country.countryInfo.iso2 !== null || country.countryInfo.iso3 !== null ? countries_data.push(country):null)
        setCountries(data)
    }

    const fetchTotalDataByCountry = async() => {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${selectedCountry}?strict=true`)
        const data = await response.json()
        setWorldometersData(data)
        setLoading(false)
    }

    const fetchMonthlyDataByCountry = async () => {
        const response = await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`)
    }
    React.useEffect(() => {
        setLoading(true)
        fetchCountries()
    }, [])

    React.useEffect(() => {
        if( selectedCountry !== "" ){
            fetchTotalDataByCountry()
            fetchMonthlyDataByCountry()
        }
    }, [selectedCountry])

    return (
        <View style={styles.container}>
            {/* Picker for the country */}
            <CountryPicker countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setLoading={setLoading}/>
            {        loading === false ?
                    <View style={{flex: 1, width: Dimensions.get("window").width - 30, marginTop: 80}}>
                        <View style={styles.innerContainer}>
                            <TotalCases country={totalDataByCountry} navigation={navigation}/>
                            <DeathCases country={totalDataByCountry} navigation={navigation}/>
                        </View>
                        <View style={styles.innerContainer}>
                            <ActiveCases country={totalDataByCountry} navigation={navigation}/>
                            <RecoveredCases country={totalDataByCountry} navigation={navigation}/>
                        </View>
                        <View style={styles.innerContainer}>
                            <Population country={worldometersData.country} population={worldometersData.population} navigation={navigation}/>
                        </View>                       
                    </View> : <ActivityIndicator size="large" animating={true} color="blue"/>
            }
        </View>

    )
}

HomeScreen.navigationOptions = () => {
    return {
        title: 'COVID-19',
        headerShown: false,
    }
}
export default HomeScreen