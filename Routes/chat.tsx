import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image, Pressable } from 'react-native';
import { ChatList } from '../screens/chat/ChatList';
import { ChatPage } from '../screens/chat/ChatPage';
import turnBack from '../assets/images/ícones/arrow-back-circle-outline.png';

const Chat = createNativeStackNavigator();

export function ChatRoutes({ navigation }: { navigation: any }){
  function turnBackToChatList() {
    navigation.navigate('ChatList');
  }

  return (
    <Chat.Navigator>
      <Chat.Screen 
        name= 'ChatList'                     
        options={{
          headerLeft: () => (
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            />
          ),
          headerStyle: { backgroundColor: '#EBEBEB' },
          headerTitle: '',
          headerShadowVisible: false,        
        }}
        component={ChatList}    
      />
      <Chat.Screen
        name= 'ChatPage'
        options={{
          headerLeft: () => (
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            />
          ),
          headerStyle: { backgroundColor: '#EBEBEB' },
          headerTitle: '',
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable onPress={turnBackToChatList}>
              <Image source={turnBack} />
            </Pressable>
          ),
        }}
        component={ChatPage}
      />
    </Chat.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    resizeMode: "center",
    width: 200,
    height: 50,
  },
});