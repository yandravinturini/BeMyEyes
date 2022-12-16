import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

import { HomePage } from '../screens/HomePage';
import { Profile } from '../screens/ProfilePage';
import { Ionicons } from '@expo/vector-icons';
// import { SearchRoutes } from './searchtrips';
import { NewTripRoutes } from './newtrip';
import { ChatRoutes } from './chat';
import { TripRoutes } from './tripRoutes';
import { HomeRoutes } from './homeroutes';

export function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#1D5F98", paddingTop: 10, paddingBottom: 8, height: 70, borderTopColor: 'transparent' },
        tabBarLabelStyle: { marginTop: 3 },
      }}>
      <Tab.Screen
        name='Homepage'
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={35} color="white" />,
        }}
        component={HomeRoutes}
      />
      <Tab.Screen
        name='New Trip'
        options={{
          tabBarLabel: 'New trip',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={35} color="white" />,
        }}
        component={NewTripRoutes}
      />
      <Tab.Screen
        name='Trip'
        options={{
          tabBarLabel: 'Your trips',
          headerShown: false,
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
          headerShown: false,
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
          headerRight: () => (<Ionicons name="ellipsis-horizontal" style={styles.moreOptionsIcon} />),
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={35} color="white" />,
          headerLeft: () => (
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            />
          ),
          headerStyle: { backgroundColor: '#EBEBEB' },
          headerTitle: '',
          headerShadowVisible: false,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  moreOptionsIcon: {
    fontSize: 35,
    marginRight: 30,
    color: "#1D5F98",

  },

  logo: {
    marginLeft: 16,
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});
