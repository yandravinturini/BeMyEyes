import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export function Login({ navigation }: {navigation: any}){        //no typescript é preciso fazer uma 'tipagem', funciona sem o fazer mas da este erro
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});