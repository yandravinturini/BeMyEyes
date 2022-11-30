import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PreConfirmScreen } from '../screens/PreConfirmScreen';
import { PosConfirmScreen } from '../screens/PosConfirmScreen';
import { StyleSheet, Image, Pressable } from 'react-native';
import turnBack from '../assets/images/ícones/arrow-back-circle-outline.png';
import { HomePage } from '../screens/HomePage';
const Stack = createNativeStackNavigator();

export function HomeRoutes({ navigation }: { navigation: any }){
  function turnBackToMain() {
    navigation.navigate('Home');
  }

  return (
    <Stack.Navigator
      initialRouteName='Home'
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
        name= 'Home'                     //nome a ser usado para chamada da screen
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
        component={HomePage}       //definir componente que vai ser renderizado
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