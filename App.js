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
  initialRouteName: 'Home'
})

Covid19StackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  let routeName = navigation.state.routes[navigation.state.index].routeName

  if( routeName == 'TotalDeathsScreen' || routeName == 'TotalActiveScreen' || routeName == 'TotalCasesScreen' || routeName == 'TotalRecoveredScreen' ){
    tabBarVisible = false
  }
  return {
    tabBarVisible,
  }
}
const VaccineStackNavigator = createStackNavigator({
  Second: {
      screen: Second,
  }
}, {
  initialRouteName: 'Second',
})

const TabNavigator = createBottomTabNavigator({
  'COVID-19': {
    screen: Covid19StackNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'green',
        activeBackgroundColor: 'yellow',
        inactiveBackgroundColor: 'white',
        labelStyle: {
          color:'black',
        }
      },
    }
  },
  'Vaccine': {
    screen: VaccineStackNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'blue',
        activeBackgroundColor: '#2b9ed9',
        inactiveBackgroundColor: 'red',
        labelStyle: {
          color: 'black'
        }
      },
    }
  }
}, {
  initialRouteName: 'COVID-19',
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
  // tabBarOptions: {
  //   style: {
  //     backgroundColor: '#2b9ed9'
  //   },
  //   inactiveTintColor: '#b5babd'
  // },
})

export default createAppContainer(TabNavigator)