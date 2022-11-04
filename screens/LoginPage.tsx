import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, /* StatusBar */ } from 'react-native';


export function Login({ navigation }){        //no typescript é preciso fazer uma 'tipagem', funciona sem o fazer mas da este erro
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
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
