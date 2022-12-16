import { FoundTrips } from '../screens/FoundTripsPage';
import { NewTrip } from '../screens/NewTrip'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Search } from '../screens/SearchPage';
import { CreateNewTripScreen } from '../screens/CreateNewTripScreen';
import { StyleSheet, Image, Pressable } from 'react-native';
import turnBack from '../assets/images/ícones/arrow-back-circle-outline.png';
import { destiny } from '../screens/FoundTripsPage';
const NewTripX = createNativeStackNavigator();

export function NewTripRoutes({ route, navigation }){
  function turnBackToMain() {
  //  navigation.navigate('FoundTrips', {firstLoc: destiny,});
    navigation.navigate('WhichOne');
  }

  function turnBackToSearch() {
  //  navigation.navigate('FoundTrips', {firstLoc: destiny,});
    navigation.navigate('Passenger');
  }

  function test() {
   navigation.navigate('FoundTrips', {firstLoc: destiny,});
    // navigation.navigate('WhichOne');
  }

  return (
    <NewTripX.Navigator
      initialRouteName='WhichOne'
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
      <NewTripX.Screen 
        name= 'WhichOne'                     //nome a ser usado para chamada da screen
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
        component={NewTrip}       //definir componente que vai ser renderizado
      />

      <NewTripX.Screen 
              name= 'Passenger'                     
              options={{
                headerRight: () => (
                  <Pressable onPress={turnBackToMain}>
                    <Image source={turnBack} />
                  </Pressable>
                ),
              }}
              component={Search}    
            />

      <NewTripX.Screen 
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
                headerRight: () => (
                  <Pressable onPress={turnBackToSearch}>
                    <Image source={turnBack} />
                  </Pressable>
                ),
              }}
              component={FoundTrips}   
            />

      <NewTripX.Screen 
              name= 'Traveler'                     
              options={{
                headerRight: () => (
                  <Pressable onPress={turnBackToMain}>
                    <Image source={turnBack} />
                  </Pressable>
                ),
              }}
              component={CreateNewTripScreen}    
            />
    </NewTripX.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});