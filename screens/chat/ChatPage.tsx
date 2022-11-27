// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import userImage1 from '../../assets/images/chatUser1.png';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

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
          <Ionicons name="call-outline" size={24} style={styles.callIcon} />
        </View>
        <View style={styles.iconContainer}>
          <Octicons name="device-camera-video" size={24} style={styles.callIcon} />
        </View>
      </View>
      <View style={{ borderColor: 'red', borderWidth: 2 }}>
        <Text>Hello from Chat!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    borderColor: 'red',
    borderWidth: 2,
  },
  headerContainer: {
    marginVertical: 20,
    height: '10%',
    // borderColor: 'black',
    // borderWidth: 2,
    flexDirection: 'row',
  },
  image: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '25%',
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
    marginRight: 3,
    width: '10%',
    paddingHorizontal: 3,
    // borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  callIcon: {
    color: 'white',
    padding: 3,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
  }
});
