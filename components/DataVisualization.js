import React from "react"
import HistoricalView from './HistorcalView'

const DataVisualization = ({ buttonPressed, dailyData, type }) => {
    const [monthlyData, setMonthlyData] = React.useState([])

    const getMonthlyData = () => {
        let aux_array = []
        if( type === 'total_cases') {
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
        }else if( type === 'total_deaths') {
            for(const [key, value] of Object.entries(dailyData.deaths)) {
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
        }else if( type === 'total_recovered'){
            for(const [key, value] of Object.entries(dailyData.recovered)) {
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
        }
        setMonthlyData(aux_array)
    }

    React.useEffect(() => {
        getMonthlyData()
    }, [buttonPressed])

    return(
        monthlyData.length !== 0 ?
        buttonPressed === 'historical' ? <HistoricalView data={monthlyData}/> : null : null
    )
}

export default DataVisualization