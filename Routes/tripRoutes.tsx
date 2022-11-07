// navegação da página trip routes para home page

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Trip = createNativeStackNavigator();

import { TripPage } from '../screens/TripPage';
import { TabRoutes } from './tab';

export function TripRoutes(){
  return (
    <Trip.Navigator>
      <Trip.Screen 
        name= 'MainTripPage'                //nome a ser usado para chamada da screen
        options={{
            headerShown: false          //para não aparecer o header
        }}
        component={TripPage}       //definir componente que vai ser renderizado
      />

    <Trip.Screen 
        name= 'MainTripPage'                //nome a ser usado para chamada da screen
        options={{
            headerShown: false          //para não aparecer o header
        }}
        component={TripPage}       //definir componente que vai ser renderizado
      />

    <Trip.Screen 
        name= 'MainTripPage'                //nome a ser usado para chamada da screen
        options={{
            headerShown: false          //para não aparecer o header
        }}
        component={TripPage}       //definir componente que vai ser renderizado
      />

    </Trip.Navigator>
  );
}
