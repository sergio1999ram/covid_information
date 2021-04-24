import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import HistoricalView from './HistorcalView'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

const DataVisualization = ({ buttonPressed, dailyData }) => {
    const [monthlyData, setMonthlyData] = React.useState([])

    const getMonthlyData = () => {
        let aux_array = []
        console.log(dailyData)
        for(const [key, value] of Object.entries(dailyData.cases)) {
            //Key length: 6, 7, 8
            //Date format: M/D/Y -> month / day / year
            if( key.length === 6 ) {
                if( key[4] + key[5] == '20' || key[4] + key[5] == '21') {
                    aux_array.push({
                        date: key,
                        data: value
                    })
                }
            }
            if( key.length === 7){
                if( key[5] + key[6] == '20' || key[5] + key[6] == '21') {
                    aux_array.push({
                        date: key,
                        data: value
                    })
                }
            }
            if( key.length === 8 ){
                if( key[6] + key[7] == '20' || key[6] + key[7] == '20' ) {
                    aux_array.push({
                        date: key,
                        data: value
                    })
                }
            }
        }
        setMonthlyData(aux_array)
    }


    React.useEffect(() => {
        getMonthlyData()
    }, [buttonPressed])

    return(
        
        <View style={styles.container}>
            {
                monthlyData.length !== 0 ? <HistoricalView data={monthlyData}/> : null
            }
        </View>
    )
}

export default DataVisualization