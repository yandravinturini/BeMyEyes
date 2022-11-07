// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, StatusBar } from 'react-native';


export function ChatList({navigation} : { navigation: any }){    
    function openChat() {
        navigation.navigate('ChatPage');
    }

  return (
    <View style={styles.container}>
      <Text>Hello from Chat List Page!</Text>
      <Button 
        title="Mandar mensagem"
        onPress={openChat}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
