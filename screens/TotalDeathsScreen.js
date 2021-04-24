import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import TopMenu from '../components/TopMenu'
import DataVisualization from '../components/DataVisualization'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const TotalDeathsScreen = ({ navigation }) => {
    const [buttonPressed, setButtonPressed] = React.useState('historical')
    const dailyData = navigation.getParam("dailyTotalData")
    const type = navigation.getParam("type")
    console.log(type)
    return (
        <View style={styles.container}>
            <TopMenu buttonPressed={buttonPressed} setButtonPressed={setButtonPressed}/>
            <DataVisualization buttonPressed={buttonPressed} dailyData={dailyData} type={type}/>
        </View>
    )
}

TotalDeathsScreen.navigationOptions = ({ navigation }) => {
    return{
        title: "COVID-19 death cases",
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
        }
    }
}
export default TotalDeathsScreen