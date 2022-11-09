import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

import { HomePage } from '../screens/HomePage';
import { Profile } from '../screens/ProfilePage';
import { Ionicons } from '@expo/vector-icons';
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

      />
      <Tab.Screen
        name='Search'
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "search" : "search-outline"}
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
        component={SearchRoutes}
      />
      <Tab.Screen
        name='Trip'
        options={{
          tabBarLabel: 'Trip',
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
          tabBarIcon: ({ focused }) =>
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
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
