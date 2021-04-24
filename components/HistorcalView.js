import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
const HistoricalView = ({ data }) => {
    const [totalMonthlyData, setTotalMonthlyData] = React.useState([])
    const averageData = () => {
        let aux_array = [];
        let max_year = parseInt(data[data.length - 1].date.split("/")[2]);

        for( let year = parseInt(data[0].date.split("/")[2]); year <= max_year; year++) {
            let aux = data.filter(item => parseInt(item.date.split("/")[2]) === year);

            for( let month = 1; month <= parseInt(aux[aux.length - 1 ].date.split("/")[0]); month++ ){
                let total_month = 0;
                let total_days = 0;

                aux.forEach(item => {
                    if( item.date.split("/")[0] === month.toString()) {
                        total_month += item.data;
                        total_days++;
                    }
                })

                aux_array.push({
                    year: year,
                    month: month,
                    total_days: total_days,
                    data: total_month
                })
            }
        }
        setTotalMonthlyData(aux_array)
    }
    
    React.useEffect(() => {
       averageData()
    }, [])


    return(
        <View style={styles.container}>
            {
                totalMonthlyData.length > 0 ? 
                <FlatList
                    data={totalMonthlyData}
                    renderItem={({item}) => (
                        <View style={{paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#ccc'}}> 
                            <Text>Year: {item.year}</Text>
                            <Text>Month: {item.month}</Text>
                            <Text>Days: {item.total_days}</Text>
                            <Text>Data: {item.data}</Text>
                        </View>)} 
                    keyExtractor={(item) => `${item.month}-${item.year}`}
                /> : null
            }
        </View>
    )
}

export default HistoricalView