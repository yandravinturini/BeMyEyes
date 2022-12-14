import { FoundTrips } from '../screens/FoundTripsPage';
import { Search }from '../screens/SearchPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PreConfirmScreen } from '../screens/PreConfirmScreen';
import { PosConfirmScreen } from '../screens/PosConfirmScreen';
import { StyleSheet, Image, Pressable } from 'react-native';
import turnBack from '../assets/images/ícones/arrow-back-circle-outline.png';
import { destiny } from '../screens/FoundTripsPage';
const Stack = createNativeStackNavigator();

export function SearchRoutes({ route, navigation }){
  function turnBackToMain() {
  //  navigation.navigate('FoundTrips', {firstLoc: destiny,});
    navigation.navigate('Whereto');
  }

  return (
    <Stack.Navigator
      initialRouteName='Whereto'
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
      <Stack.Screen 
        name= 'Whereto'                     //nome a ser usado para chamada da screen
        options={{
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
        component={Search}       //definir componente que vai ser renderizado
      />
      <Stack.Screen
        name= 'FoundTrips'
        options={{
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
        component={FoundTrips}
      />
      <Stack.Screen
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
      <Stack.Screen
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});