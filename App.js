import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator  } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { default as Home} from './screens/HomeScreen'
import { default as Second } from './screens/SecondScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
},{
  defaultNavigationOptions: {
    headerShown: false
  }
})

const SecondStackNavigator = createStackNavigator({
  Second: {
      screen: Second
  }
}, {
  defaultNavigationOptions: {
    headerShown: false
  }
})

const TabNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Second: SecondStackNavigator
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      let { routeName } = navigation.state
      let iconName

      if( routeName === 'Home') {
        iconName = 'home-sharp'
      }else if( routeName == 'Second' ){
        iconName = 'code'
      }

      return <Icon name={iconName} color={tintColor} size={20}/>
    },
  }),
  tabBarOptions: {
    style: {
      backgroundColor: '#2b9ed9'
    },
    activeTintColor: 'black',
    inactiveTintColor: '#b5babd'
  }
})

export default createAppContainer(TabNavigator)