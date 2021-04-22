import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

const DataVisualization = ({ buttonPressed }) => {
    React.useEffect(() => {
        
    }, [buttonPressed])
    return(
        buttonPressed === 'historical' ? 
        <View style={styles.container}>
            <Text> button pressed: {buttonPressed}</Text>                
        </View> :
        <View style={styles.container}>
            <Text> button pressed: {buttonPressed}</Text>
        </View>
    )
}

export default DataVisualization