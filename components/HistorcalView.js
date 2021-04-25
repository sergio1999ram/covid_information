import React from 'react'
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native'
import Chart from './Chart'

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
    },
    preciseDataContainer: {
        flex: 1,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
const HistoricalView = ({ data }) => {
    const [totalMonthlyData, setTotalMonthlyData] = React.useState([])
    const [incrementMonth, setIncrementMonth] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    
    const monthNames = ["J", "F", "M", "A", "M", "J1", "J2", "A", "S", "O", "N", "D"]
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
                    month: monthNames[month - 1],
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
            aux_array.push({
                month: aux_data.month,
                year: aux_data.year,
                total_days: aux_data.total_days,
                monthly_data: aux_data.data,
                average: aux_data.data / aux_data.total_days,
                increment: aux_data.data      
            });

            for( let i = 1; i <= array.length - 1; i++ ){
                aux_array.push({
                    month: array[i].month,         
                    year: array[i].year,          
                    total_days: array[i].total_days,
                    monthly_data: array[i].data,
                    average: array[i].data / array[i].total_days, //IMPORTANT DATA
                    increment: array[i].data - aux_data.data //IMPORTANT DATA
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
                incrementMonth.length > 0 ? 
                <Chart data={incrementMonth}/>
                : null
            }
            <View style={styles.preciseDataContainer}>
                <Text> Precise data is going here! </Text>
            </View>
        </View>
    )
}

export default HistoricalView