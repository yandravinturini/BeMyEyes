import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PosConfirmScreen } from '../screens/PosConfirmScreen';
import { StyleSheet, Image, Pressable } from 'react-native';
import turnBack from '../assets/images/ícones/arrow-back-circle-outline.png';
import { ChatRoutes } from './chat';
const T = createBottomTabNavigator();
const S = createNativeStackNavigator();

import { ChatPage } from '../screens/chat/ChatPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function PosRoutes({ navigation }: { navigation: any }) {
  function turnBackToMain() {
    navigation.goBack()
  }


  return (
    <S.Navigator
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
      <S.Screen
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
    
    <T.Navigator>
        <T.Screen
        name='ChatPage'
        options={{
          headerRight: () => (
            <Pressable onPress={turnBackToMain}>
              <Image source={turnBack} />
            </Pressable>
          ),
        }}
        component={ChatPage}
      />
    </T.Navigator>

    </S.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});



<Trip.Screen
        name='ChatPage'
        options={{
          headerRight: () => (
            <Pressable onPress={turnBackToMain}>
              <Image source={turnBack} />
            </Pressable>
          ),
        }}
        component={ChatPage}
      />