import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
=======
import { StyleSheet, Text, View, Button , Platform} from 'react-native';
>>>>>>> 6efe7014795ea8918c8de5ba0441ee270f2c58fe

// import DropDownPicker from 'react-native-dropdown-picker'

export function Profile() {

  const [age, setAge] = useState();
  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="maria" />
      <Text>Age</Text>
      <Picker
        selectedValue={age}
        onValueChange={(itemValue, itemIndex) =>
          setAge(itemValue)
        }>
        <Picker.Item label="18-25" value="jovem" />
        <Picker.Item label="26-30" value="jovem-adulto" />
        <Picker.Item label="31-65" value="adulto" />
        <Picker.Item label="66+" value="senior" />
      </Picker>
      <Text>Email</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="maria" />
      <Text>Password</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="maria" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: 'white',
=======
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
>>>>>>> 6efe7014795ea8918c8de5ba0441ee270f2c58fe
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'red',
  }
});
