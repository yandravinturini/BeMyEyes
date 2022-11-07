import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import userImage from '../assets/images/foto_perfil.png';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
export function Profile() {

  const [age, setAge] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.userImgContainer}>
        <View style={{ width: '33%' }}></View>
        <View style={{ width: '33%' }}>
          <Image source={userImage} style={styles.imagem} />
          {/* <Image source={require('../assets/images/foto_perfil.png')} /> */}
          <Ionicons name="camera-outline" style={styles.cameraIcon} />
        </View>
        <View style={{ width: '33%' }}></View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Username</Text>

        <TextInput style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="maria" />

        <Text style={styles.text}>Age</Text>
        <View style={styles.dropdownContainer}>
          <Picker style={{
            height: 20,
            width: 120
          }}
            itemStyle={styles.dropdown}
            selectedValue={age}
            onValueChange={(itemValue, itemIndex) =>
              setAge(itemValue)
            }>

            <Picker.Item label="18-25" value="jovem" />
            <Picker.Item label="26-30" value="jovem-adulto" />
            <Picker.Item label="31-65" value="adulto" />
            <Picker.Item label="66+" value="senior" />
          </Picker>
        </View>
        <Text style={styles.text}>Email</Text>

        <TextInput style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="maria@gmail.com" />

        <Text style={styles.text}>Password</Text>

        <TextInput style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          secureTextEntry={true}
          placeholder="********" />
      </View>
      <Pressable style={styles.saveButton}>
        <Text style={styles.buttonText}>Save changes
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
  },
  formContainer: {
    width: 230,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 18,
    // fontFamily: 'Inter',
    fontWeight: '400',
    width: '100%',
    marginBottom: 8,
  },
  input: {
    fontSize: 15,
    // fontFamily: 'Inter',
    fontWeight: '400',
    backgroundColor: 'white',
    height: 31,
    width: '100%',
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
  },
  dropdownContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    overflow: 'hidden',
    width: 120,
    justifyContent: 'center',
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 2,
    // paddingBottom: 10,
  },
  dropdown: {
    fontSize: 15,
    // // fontFamily: 'Inter',
    // fontWeight: '400',
    // backgroundColor: 'blue',
    height: 20,
    width: 120,
  },
  userImgContainer: {
    height: 140,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imagem: {
    width: 117,
    height: 117,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cameraIcon: {
    backgroundColor: '#1D5F98',
    color: 'white',
    fontSize: 28,
    paddingRight: 2,
    paddingLeft: 2,
    borderRadius: 4,
    position: 'absolute',
    bottom: 1,
    right: 6,
  },
  saveButton: {
    backgroundColor: '#1D5F98',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    width: 151,
    height: 30,
    borderRadius: 26,
  },
  buttonText: {
    // fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: 'white',
  }
});
