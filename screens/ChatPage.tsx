// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, StatusBar } from 'react-native';


export function ChatPage(){    

  return (
    <View style={styles.container}>
      <Text>Hello from Chat!</Text>
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
