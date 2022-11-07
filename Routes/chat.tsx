import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatList } from '../screens/ChatList';
import { ChatPage } from '../screens/ChatPage';

const Chat = createNativeStackNavigator();

export function ChatRoutes(){
  return (
    <Chat.Navigator>
      <Chat.Screen 
        name= 'ChatList'                     
        options={{
            headerShown: false          
        }}
        component={ChatList}    
      />
      <Chat.Screen
        name= 'ChatPage'
        options={{
            headerShown: false
        }}
        component={ChatPage}
      />
    </Chat.Navigator>
  );
}
