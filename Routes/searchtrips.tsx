import { FoundTrips } from '../screens/FoundTripsPage';
import { Search }from '../screens/SearchPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function SearchRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name= 'Whereto'                     //nome a ser usado para chamada da screen
        options={{
            headerShown: false          //para não aparecer o header
        }}
        component={Search}       //definir componente que vai ser renderizado
      />
      <Stack.Screen
        name= 'FoundTrips'
        options={{
            headerShown: false
        }}
        component={FoundTrips}
      />
    </Stack.Navigator>
  );
}