import React from 'react';

import Home from './screens/home';
import Favorite from './screens/favorite';
import Settings from './screens/settings';
import User from './screens/user';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        barStyle={{
          backgroundColor: '#b1b1ff',
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            size = focused ? 24 : 20;
            color = focused ? '#4444aa' : '#fff'
            switch (route.name) {
              case 'Home':
                iconName = 'th-large';
                break;
              case 'Favorite':
                iconName = 'book-open';
                break;
              case 'Settings':
                iconName = 'cog';
                break;
              case 'User':
                iconName = 'user-alt';
                break;
              default:
                iconName = 'th-large';
            }
            return (
              <FontAwsome5 
              name={iconName} 
              size={size} 
              color={color}
              />
            )
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
        />
        <Tab.Screen
          name="User"
          component={User}
        />
      </Tab.Navigator>
    </NavigationContainer >
  );
};

export default App;