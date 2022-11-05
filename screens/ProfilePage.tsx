import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import userImage from '../assets/images/Ellipse 2.png';
import React from 'react';

export function Profile() {

  const [age, setAge] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.userImgContainer}>
        <Image source={userImage} style={styles.imagem} />
      </View>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="maria" />
      <Text style={styles.text}>Age</Text>
      <Picker style={styles.dropdown}
        selectedValue={age}
        onValueChange={(itemValue, itemIndex) =>
          setAge(itemValue)
        }>
        <Picker.Item label="18-25" value="jovem" />
        <Picker.Item label="26-30" value="jovem-adulto" />
        <Picker.Item label="31-65" value="adulto" />
        <Picker.Item label="66+" value="senior" />
      </Picker>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="maria@gmail.com" />
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="********" />
        <Button title="Save changes"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter',
    fontWeight: '400',
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8,
  },
  input: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    backgroundColor: 'white',
    height: 31,
    width: 220,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    paddingLeft: 10,
  },
  dropdown: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    backgroundColor: 'white',
    borderColor: 'transparent',
    height: 31,
    width: 220,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    paddingLeft: 10,
  },
  userImgContainer: {
    // borderColor: 'red',
    // borderWidth: 3,
    alignItems: 'center',
    height: 140,
  },
  imagem:{
    width: 117, 
    height: 117,
  }
});
