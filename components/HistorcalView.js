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
    const [incrementMonth, setIncrementMonth] = React.useState([])
    const [loading, setLoading] = React.useState(true)

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
                    data: total_month,
                })
            }
        }
        setTotalMonthlyData(aux_array)
    }
    
    const calculateIncrement = () => {
        if( totalMonthlyData.length > 0 ){ 
            let array = totalMonthlyData;
            let aux_array = [];
            let aux_data = totalMonthlyData[0];
            array.push({
                start_date: `${aux_data.month}-${aux_data.year}`,
                end_date: `${aux_data.month}-${aux_data.year}`,
                total_days: aux_data.total_days,
                monthly_data: aux_data.data,
                average: aux_data.data / aux_data.total_days   ,
                increment: aux_data.data      
            });

            for( let i = 1; i <= array.length - 2; i++ ){
                aux_array.push({
                    start_date: `${aux_data.month}-${aux_data.year}`,
                    end_date: `${array[i].month}-${array[i].year}`,
                    total_days: array[i].total_days,
                    monthly_data: array[i].data,
                    average: array[i].data / array[i].total_days,
                    increment: array[i].data - aux_data.data
                });

                aux_data = array[i];
            }

            setIncrementMonth(aux_array);

            setLoading(false)
        }
    }
    React.useEffect(() => {
       if( loading === true ){
        averageData()
        calculateIncrement()
       }
    })


    return(
        <View style={styles.container}>
            {
                totalMonthlyData.length > 0 ? 
                <FlatList
                    data={incrementMonth}
                    renderItem={({item}) => (
                        <View style={{paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: '#ccc'}}> 
                            <Text>Start Date | End Date: {item.start_date} | {item.end_date} </Text>
                            <Text>Monthly Data: {item.monthly_data}</Text>
                            <Text>Total Days: {item.total_days}</Text>
                            <Text>Average cases: {item.average}</Text>
                            <Text>Increment: {item.increment}</Text>
                        </View>)} 
                    keyExtractor={(item) => `${item.start_date}/${item.end_date}`}
                /> : null
            }
        </View>
    )
}

export default HistoricalView