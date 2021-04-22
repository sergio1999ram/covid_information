import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

import TopMenu from '../components/TopMenu'
import DataVisualization from '../components/DataVisualization'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
//Get all COVID-19 global data
//https://disease.sh/v3/covid-19/historical/all?lastdays=all
const TotalCasesScreen = ({ navigation }) => {
    const [buttonPressed, setButtonPressed] = React.useState('historical')
    return (
        <View style={styles.container}>
            <TopMenu buttonPressed={buttonPressed} setButtonPressed={setButtonPressed}/>
            <DataVisualization buttonPressed={buttonPressed} setButtonPressed={setButtonPressed}/>
        </View>
    )
}

TotalCasesScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'COVID-19 total cases',
        headerStyle: {
            backgroundColor: '#2b9ed9'
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: () => {
            return(
                <TouchableOpacity onPress={() => navigation.goBack()} onLongPress={() => Alert.alert("Go back to the movie list")}>
                    <Icon 
                        style={{paddingLeft: 12}}
                        name="arrow-back"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
            )
        },
    }
}
export default TotalCasesScreen