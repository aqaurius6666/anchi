import React from 'react';

import Splash from './screens/splash';
import Home from './screens/home';
import Favorite from './screens/favorite';
import Settings from './screens/settings';
import User from './screens/user';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

// import { Provider } from 'react-redux';
// import { Store } from './redux/store';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            size = focused ? 24 : 20;
            color = focused ? '#4444aa' : '#7777'
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
          headerShown: false,
          tabBarActiveTintColor: '#6464af',
          tabBarInactiveTintColor: '#7777',
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }
        })
      }
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    // <Provider store={Store}>
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#6464af'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <RootStack.Screen
          name="Splash"
          component={Splash}
          // initialParams={{ message: 'Hello from A' }}
          options={{
            headerShown: false
          }}
        />
        <RootStack.Screen
          name="An Chi"
          component={HomeTabs}
        />
        {/* <RootStack.Screen
          name="Task"
          component={Task}
        />
        <RootStack.Screen
          name="Camera"
          component={Camera}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer >
    // </Provider>
  );
};
//   <NavigationContainer>
//     <Tab.Navigator
//       initialRouteName='Home'
//       barStyle={{
//         backgroundColor: '#b1b1ff',
//       }}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, size, color }) => {
//           let iconName;
//           size = focused ? 24 : 20;
//           color = focused ? '#4444aa' : '#fff'
//           switch (route.name) {
//             case 'Home':
//               iconName = 'th-large';
//               break;
//             case 'Favorite':
//               iconName = 'book-open';
//               break;
//             case 'Settings':
//               iconName = 'cog';
//               break;
//             case 'User':
//               iconName = 'user-alt';
//               break;
//             default:
//               iconName = 'th-large';
//           }
//           return (
//             <FontAwsome5
//               name={iconName}
//               size={size}
//               color={color}
//             />
//           )
//         },
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}

//       />
//       <Tab.Screen
//         name="Favorite"
//         component={Favorite}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={Settings}
//       />
//       <Tab.Screen
//         name="User"
//         component={User}
//       />
//     </Tab.Navigator>
//   </NavigationContainer >

export default App;