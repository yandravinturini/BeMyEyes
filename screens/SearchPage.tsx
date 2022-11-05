import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Platform, TouchableOpacity, ImageBackground } from 'react-native';

export function Search({navigation}){  

  function foundTrips() {
    navigation.navigate('FoundTrips')
  }

  const image = {uri: "https://i.ibb.co/Xb3C84c/Component-1.png"}
  const [location, setLocation] = useState("");
  const checkLocation = () => {
    //Check for the Location TextInput
    if (!location.trim()) {
      return 1;
    }
    return 0;
  };

  const checkColor = () =>  {
    if (!location.trim()){
      return "#EBEBEB";
    }
    return "#88B83B";
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={image}
        style={styles.backgroundStyle}>
        <Text style={styles.text}>Where to?</Text>
        <View style={{flexDirection:'row'}}>
          <TextInput
            style={styles.input_location}
            placeholder="Lisbon"
            placeholderTextColor="#EBEBEB"
            onChangeText={(location) => setLocation(location)}>
          </TextInput>
          <TouchableOpacity style={styles.button}
            disabled = {checkLocation()? true : false}
            onPress = {foundTrips}
            >
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.125 1L25.375 12.25L14.125 23.5M23.8125 12.25H1" stroke={checkColor()} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 32,
    marginBottom: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
    textAlign: 'left',
    },

  input_location: {
    fontFamily: 'Inter',
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
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  icon: {
    width:20,
    height: 42,
    marginRight: 'auto',
    marginLeft:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    },

  imageStyle: {
    width: "100%",
    height: "100%",
    alignSelf: 'center',
  },

  backgroundStyle: {
    width: 348, 
    height: 420,
    justifyContent:'center',
    alignSelf:'center',
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
