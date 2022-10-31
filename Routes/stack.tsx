// navegação da página login para home page

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Login }from '../screens/LoginPage';
import { TabRoutes } from './tab';

export function StackRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name= 'Login'                     //nome a ser usado para chamada da screen
        options={{
            headerShown: false          //para não aparecer o header
        }}
        component={Login}       //definir componente que vai ser renderizado
      />
      <Stack.Screen
        name= 'Menu'
        options={{
            headerShown: false
        }}
        component={TabRoutes}
      />
    </Stack.Navigator>
  );
}
