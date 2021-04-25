import React from "react"
import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 22
    }
})

const MonthlyView = ({ data }) => {
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

export const MonthlyView