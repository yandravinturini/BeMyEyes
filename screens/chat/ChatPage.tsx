// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import userImage1 from '../../assets/images/chatUser1.png';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import ChatBot from './components/chat-bot';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export function ChatPage() {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.image}>
          <Image source={userImage1} />
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>John</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <View style={styles.createCircleBorder}>
              <Ionicons name="call-outline" size={24} style={styles.callIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <View style={styles.createCircleBorder}>

              <Octicons name="device-camera-video" size={24} style={styles.callIcon} />

            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: '87%' }}>
        <View style={{ height: '85%', width: '97%', marginRight: 'auto', marginLeft: 'auto' }}>
          <ChatBot />
        </View>
        <View style={{ height: '15%', justifyContent: 'center', }}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 'auto', }}>
              <Ionicons name="camera-outline" style={styles.bottomIcons} />
            </TouchableOpacity>
            <TextInput style={styles.textInput}
            // onChangeText={(location) => setLocation(location)}
            />
            <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 'auto', }}>
              <AntDesign name="arrowright" style={styles.bottomIcons} />
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity style={styles.button} disabled={checkLocation() ? true : false}onPress={foundTrips}>
          <Image style={styles.arrowStyle} source={checkImage()}></Image>
        </TouchableOpacity> */}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    // borderColor: 'red',
    // borderWidth: 2,
  },
  headerContainer: {
    marginTop: 20,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  image: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameContainer: {
    justifyContent: 'center',
    width: '53%',
  },
  userName: {
    // borderColor: 'red',
    // borderWidth: 2,
    fontSize: 24,
  },
  iconContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '11%',
    paddingHorizontal: 3,
    justifyContent: 'center',
    alignContent: 'center',
  },
  createCircleBorder: {
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 2,
    width: 35,
    height: 35,
  },
  callIcon: {
    color: 'white',
    padding: 3,
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '93%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 12,

  },
  bottomIcons: {
    fontSize: 35,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#EBEBEB',
  },
  textInput: {
    // borderColor: 'red', 
    // borderWidth: 2,
    fontSize: 17,
    width: '70%',
    height: 42,
  }
});
