import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import Card from '../shared_functions/card'

export function Trip(){    

  return (
    <Card>
      <Text>Hello from Trip page!</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

