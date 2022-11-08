import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

import { HomePage } from '../screens/HomePage';
import { TripPage } from '../screens/TripPage';
import { PreConfirmScreen } from '../screens/PreConfirmScreen';
import { ChatPage } from '../screens/ChatPage';
import { Profile } from '../screens/ProfilePage';
import { Search } from '../screens/SearchPage';
import { Ionicons } from '@expo/vector-icons';
import React, * as react from 'react';
import { SearchRoutes } from './searchtrips';
import { ChatRoutes } from './chat';
import { TripRoutes } from './tripRoutes';

export function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#1D5F98", paddingTop: 10, paddingBottom: 8, height: 70, borderTopColor: 'transparent' },
        tabBarLabelStyle: { marginTop: 3 },
        headerStyle: { borderBottomColor: 'transparent', backgroundColor: '#EBEBEB' },
        headerTitle: '',
        headerLeftContainerStyle: {marginTop:10, marginBottom: 10},
        headerLeft: () => (
          <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          />
        ),
      }}>
      <Tab.Screen
        name='Homepage'
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={35} color="white" />,
        }}

      />
      <Tab.Screen
        name='Search'
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={35} color="white" />,
        }}
        component={SearchRoutes}
      />
      <Tab.Screen
        name='Trip'
        options={{
          tabBarLabel: 'Trip',
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "airplane" : "airplane-outline"}
              size={35} color="white" />,
        }}
        component={TripRoutes}
      />
      <Tab.Screen
        name='Chat'
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={35} color="white" />,
        }}
        component={ChatRoutes}
      />
      <Tab.Screen
        name='Profile'
        options={{
          tabBarLabel: 'Profile',
          headerRight: () => (<Ionicons name="ellipsis-horizontal" style={styles.moreOptionsICon}/>),
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={35} color="white" />,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  moreOptionsICon: {
    fontSize: 35,
    marginRight:30,
    color: "#1D5F98",

  },

  logo:{
    marginLeft: 10,
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});
