import React from "react"
import { LineChart } from "react-native-chart-kit"
import { Dimensions } from "react-native"

const Chart = ({ data }) => {
    const [averageData, setAverageData] = React.useState([])
    const [incrementData, setIncrementData] = React.useState([])
    const [months, setMonths] = React.useState([])

    const updateMonths = () => {
        let array = [];
        data.forEach( item => array.push(item.month))
        setMonths(array)
    }

    const splitAverageFromData = () => {
        if( averageData.length === 0 ) {
            let aux_array = [];

            data.forEach(item => aux_array.push(item.average));
            console.log(aux_array)
            setAverageData(aux_array);
        }
    }
    // const splitIncrementFromData = () => {
    //     let aux_array = []

    //     data.forEach(item => aux_array.push(item.increment))

    //     setCasesData([...casesData, {
    //         increment: aux_array,
    //     }])
    // }

    React.useEffect(() => {
        splitAverageFromData();
        updateMonths();
    }, [])

    return(
            averageData.length > 0
            ? <LineChart
            
                data={{
                        labels: months,
                        datasets: [
                            { data: averageData }
                        ],
                        legend: ["Total cases data below the chart"],
                    }}
                width={Dimensions.get("window").width}
                height={320}
                chartConfig={{
                    propsForDots: {
                        r: "3",
                        strokeWidth: "1",
                        stroke: "#ffa726"
                      },
                    backgroundColor: '#e26a00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                style={{
                borderRadius: 16
                }}
            />
        : null
    )

}

export default Chart