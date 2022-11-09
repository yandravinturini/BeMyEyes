import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, Image, View, Platform, TouchableOpacity, ImageBackground } from 'react-native';
import green_arrow from '../assets/images/green_arrow.png';
import gray_arrow from '../assets/images/gray_arrow.png';

export function Search({ navigation }: { navigation: any }) {

  function foundTrips() {
    navigation.navigate('FoundTrips', {firstLoc: location,})
  }

  const image = { uri: "https://i.ibb.co/Xb3C84c/Component-1.png" }
 // const green_arrow = {uri: "https://i.ibb.co/DwMcW7b/green-arrow.png"}
 // const gray_arrow = {uri: "https://i.ibb.co/Tw0Hpsg/gray-arrow.png"}


  const [location, setLocation] = useState("");
  const checkLocation = () => {
    //Check for the Location TextInput
    if (!location.trim()) {
      return 1;
    }
    return 0;
  };

  const checkImage = () => {
    if (!location.trim()) {
      return gray_arrow;
    }
    return green_arrow;
  }

  // const checkColor = () => {
  //   if (!location.trim()) {
  //     return "#EBEBEB";
  //   }
  //   return "#88B83B";
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.backgroundStyle}>
        <Text style={styles.text}>Where to?</Text>
        <View style={{ flexDirection: 'row' }}> 
          <TextInput
            style={styles.input_location}
            placeholder="Lisbon"
            placeholderTextColor="#EBEBEB"
            onChangeText={(location) => setLocation(location)}
          />
          <TouchableOpacity style={styles.button}
            disabled={checkLocation() ? true : false}
            onPress={foundTrips}
          >
            <Image style={styles.arrowStyle} source={checkImage()}></Image>
          </TouchableOpacity>
        </View> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? /* StatusBar.currentHeight */ 20 : 0,
    bbackgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 32,
    marginBottom: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "black",
    textAlign: 'left',
  },

  input_location: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 42,
    width: 255,
    borderRadius: 8,
    marginBottom: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  icon: {
    width: 20,
    height: 42,
    marginRight: 'auto',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },

  imageStyle: {
    width: "100%",
    height: "100%",
    alignSelf: 'center',
  },

  arrowStyle:{
    width: 27,
    height: 25,
  },

  backgroundStyle: {
    width: 348,
    height: 420,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'white',
    marginRight: 'auto',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingRight: 5,
  }
});
