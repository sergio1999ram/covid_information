import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator  } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { default as Home} from './screens/HomeScreen'
import { default as Second } from './screens/SecondScreen'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'

import TotalActiveScreen from "./screens/TotalActiveScreen"
import TotalDeathsScreen from "./screens/TotalDeathsScreen"
import TotalRecoveredScreen from "./screens/TotalRecoveredScreen"
import TotalCases from "./screens/TotalCasesScreen"

const Covid19StackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  TotalActiveScreen: {
    screen: TotalActiveScreen
  },
  TotalDeathsScreen: {
    screen: TotalDeathsScreen
  },
  TotalCasesScreen: {
    screen: TotalCases,
  },
  TotalRecoveredScreen: {
    screen: TotalRecoveredScreen,
  }
}, {

})

Covid19StackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  let routeName = navigation.state.routes[navigation.state.index].routeName

  if( routeName == 'TotalDeathsScreen' || routeName == 'TotalActiveScreen' || routeName == 'TotalCasesScreen' || routeName == 'TotalRecoveredScreen' ){
    tabBarVisible = false
  }
  return {
    tabBarVisible
  }
}
const VaccineStackNavigator = createStackNavigator({
  Second: {
      screen: Second,
  }
}, {})

const TabNavigator = createBottomTabNavigator({
  'COVID-19': {
    screen: Covid19StackNavigator,
  },
  'Vaccine': {
    screen: VaccineStackNavigator,
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      let { routeName } = navigation.state
      let iconName

      if( routeName === 'COVID-19') {
        iconName = 'viruses'
      }else if( routeName == 'Vaccine' ){
        iconName = 'hand-holding-medical'
      }

      return <Icon name={iconName} color={tintColor} size={20}/>
    },
  }),
  tabBarOptions: {
    style: {
      backgroundColor: '#2b9ed9'
    },
    activeTintColor: () => {
      let tintColor
      let { routeName } = navigation.state

      if( routeName === 'COVID-19') {
        tintColor = 'green'
      }else if( routeName == 'Vaccine' ){
        tintColor = 'red'
      }
      
      return tintColor
    },
    inactiveTintColor: '#b5babd'
  }
})

export default createAppContainer(TabNavigator)