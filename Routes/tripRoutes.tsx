// navegação da página trip routes para home page

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateNewTripScreen} from '../screens/CreateNewTripScreen';
import { PosConfirmScreen } from '../screens/PosConfirmScreen';
import { PreConfirmScreen } from '../screens/PreConfirmScreen';

const Trip = createNativeStackNavigator();

import { TripPage } from '../screens/TripPage';

export function TripRoutes() {
  return (
    <Trip.Navigator>
      <Trip.Screen
        name='MainTripPage'
        options={{
          headerShown: false
        }}
        component={TripPage}
      />

      <Trip.Screen
        name='CreateNewTrip'
        options={{
          headerShown: false
        }}
        component={CreateNewTripScreen}
      />

      <Trip.Screen
        name='PreConfirmTrip'
        options={{
          headerShown: false
        }}
        component={PreConfirmScreen}
      />

      <Trip.Screen
        name='PosConfirmTrip'
        options={{
          headerShown: false
        }}
        component={PosConfirmScreen}
      />

    </Trip.Navigator>
  );
}
