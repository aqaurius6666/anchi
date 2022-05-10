import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from './components/icons';
import Colors from './constants/colors';

import * as Animatable from 'react-native-animatable';
import Favorite from './screens/favorite';
import Search from './screens/search';
import Home from './screens/home';
import Settings from './screens/settings';
import User from './screens/user';
import Splash from './screens/splash';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: Home },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: Search },
  { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: Favorite },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: Settings },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: User },
];

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -30 }, 1: { scale: 1.2, translateY: -14 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    // <Provider store={Store}>
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='Splash'
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false
          }}
        />
        <RootStack.Screen
          name="AnimTab1"
          component={AnimTab1}
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    position: 'absolute',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  }
})

// import React from 'react';

// import Splash from './screens/splash';
// import Home from './screens/home';
// import Favorite from './screens/favorite';
// import Settings from './screens/settings';
// import User from './screens/user';
// import Search from './screens/search';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// // import { Provider } from 'react-redux';
// // import { Store } from './redux/store';

// import { LogBox } from 'react-native';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
// ]);

// const Tab = createBottomTabNavigator();
// const RootStack = createStackNavigator();

// export function HomeTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName='Home'
//       screenOptions={
//         ({ route }) => ({
//           tabBarIcon: ({ focused, size, color }) => {
//             let iconName;
//             size = focused ? 24 : 20;
//             color = focused ? '#4444aa' : '#7777'
//             switch (route.name) {
//               case 'Home':
//                 iconName = 'home-variant'; // hpme-variant-outline
//                 break;
//               case 'Favorite':
//                 iconName = 'heart'; // heart-outline
//                 break;
//               case 'Settings':
//                 iconName = 'cog'; // cog-outline
//                 break;
//               case 'User':
//                 iconName = 'account'; // account-outline
//                 break;
//               case 'Search':
//                 iconName = 'account'; // account-outline
//                 break;
//               default:
//                 iconName = 'heart';
//             }
//             return (
//               <MaterialCommunityIcons
//                 name={iconName}
//                 size={size}
//                 color={color}
//               />
//             )
//           },
//           headerShown: false,
//           tabBarActiveTintColor: '#6464af',
//           tabBarInactiveTintColor: '#7777',
//           tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' }
//         })
//       }
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Favorite" component={Favorite} />
//       <Tab.Screen name="Settings" component={Settings} />
//       <Tab.Screen name="User" component={User} />
//       <Tab.Screen name="Search" component={Search} />
//     </Tab.Navigator>
//   );
// }

// const App = () => {
//   return (
//     // <Provider store={Store}>
//     <NavigationContainer>
//       <RootStack.Navigator
//         initialRouteName='Splash'
//         screenOptions={{
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#6464af'
//           },
//           headerShown: false,
//           // headerTintColor: '#fff',
//           // headerTitleStyle: {
//           //   fontSize: 25,
//           //   fontWeight: 'bold'
//           // }
//         }}
//       >
//         <RootStack.Screen
//           name="Splash"
//           component={Splash}
//           // initialParams={{ message: 'Hello from A' }}
//           options={{
//             headerShown: false
//           }}
//         />
//         <RootStack.Screen
//           name="An Chi"
//           component={HomeTabs}
//         />
//         {/* <RootStack.Screen
//           name="Task"
//           component={Task}
//         />
//         <RootStack.Screen
//           name="Camera"
//           component={Camera}
//         /> */}
//       </RootStack.Navigator>
//     </NavigationContainer >
//     // </Provider>
//   );
// };

// //   <NavigationContainer>
// //     <Tab.Navigator
// //       initialRouteName='Home'
// //       barStyle={{
// //         backgroundColor: '#b1b1ff',
// //       }}
// //       screenOptions={({ route }) => ({
// //         tabBarIcon: ({ focused, size, color }) => {
// //           let iconName;
// //           size = focused ? 24 : 20;
// //           color = focused ? '#4444aa' : '#fff'
// //           switch (route.name) {
// //             case 'Home':
// //               iconName = 'th-large';
// //               break;
// //             case 'Favorite':
// //               iconName = 'book-open';
// //               break;
// //             case 'Settings':
// //               iconName = 'cog';
// //               break;
// //             case 'User':
// //               iconName = 'user-alt';
// //               break;
// //             default:
// //               iconName = 'th-large';
// //           }
// //           return (
// //             <FontAwsome5
// //               name={iconName}
// //               size={size}
// //               color={color}
// //             />
// //           )
// //         },
// //       })}
// //     >
// //       <Tab.Screen
// //         name="Home"
// //         component={Home}

// //       />
// //       <Tab.Screen
// //         name="Favorite"
// //         component={Favorite}
// //       />
// //       <Tab.Screen
// //         name="Settings"
// //         component={Settings}
// //       />
// //       <Tab.Screen
// //         name="User"
// //         component={User}
// //       />
// //     </Tab.Navigator>
// //   </NavigationContainer >

// export default App;