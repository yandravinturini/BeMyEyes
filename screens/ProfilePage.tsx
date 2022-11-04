import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , Platform} from 'react-native';


export function Profile(){    

  return (
    <View style={styles.container}>
      <Text>Hello from Profile!</Text>
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
