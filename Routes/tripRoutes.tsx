// navegação da página trip routes para home page

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateNewTripScreen } from '../screens/CreateNewTripScreen';
import { PosConfirmScreen } from '../screens/PosConfirmScreen';
import { PreConfirmScreen } from '../screens/PreConfirmScreen';
import { StyleSheet, Image, Pressable } from 'react-native';
import addTrip from '../assets/images/ícones/add-circle-outline.png';
import turnBack from '../assets/images/ícones/arrow-back-circle-outline.png';

const Trip = createNativeStackNavigator();

import { TripPage } from '../screens/TripPage';
import { ChatPage } from '../screens/ChatPage';

export function TripRoutes({ navigation }: { navigation: any }) {
  function turnBackToMain() {
    navigation.navigate('MainTripPage');
  }

  function goToCreateNewTrio() {
    navigation.navigate('CreateNewTrip');
  }

  return (
    <Trip.Navigator
      initialRouteName='MainTripPage'
      screenOptions={{
        headerLeft: () => (
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
        ),
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#EBEBEB' },
        headerTitle: '',
      }}
    >
      <Trip.Screen
        name='MainTripPage'
        options={{
          headerRight: () => (
            <Pressable onPress={goToCreateNewTrio}>
              <Image source={addTrip} />
            </Pressable>
          ),
        }}
        component={TripPage}
      />

      <Trip.Screen
        name='CreateNewTrip'
        options={{
          headerRight: () => (
            <Pressable onPress={turnBackToMain}>
              <Image source={turnBack} />
            </Pressable>
          ),
        }}
        component={CreateNewTripScreen}
      />

      <Trip.Screen
        name='PreConfirmTrip'
        options={{
          headerRight: () => (
            <Pressable onPress={turnBackToMain}>
              <Image source={turnBack} />
            </Pressable>
          ),
        }}
        component={PreConfirmScreen}
      />

      <Trip.Screen
        name='PosConfirmTrip'
        options={{
          headerRight: () => (
            <Pressable onPress={turnBackToMain}>
              <Image source={turnBack} />
            </Pressable>
          ),
        }}
        component={PosConfirmScreen}
      />
      <Trip.Screen
        name= 'ChatPage'
        // options={{
        // }}
        component={ChatPage}
      />

    </Trip.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});
