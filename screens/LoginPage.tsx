import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import data from '../data/test.json';
import * as RNFS from 'react-native-fs';
import React from 'react';



export function Login({ navigation }){        //no typescript é preciso fazer uma 'tipagem', funciona sem o fazer mas da este erro
  // const [text, onChangeText] = React.useState('Useless Text');
  // const [number, onChangeNumber] = React.useState(null);

  function openApp() {
    navigation.navigate('Menu')
  }

  return (
    <View style={styles.container}>
      <Text>Hello from Login!</Text>
      <StatusBar style="auto" />
      <Button 
        title="Login"
        onPress={openApp}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

  }

});
