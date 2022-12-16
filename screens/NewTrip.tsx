import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, Image, View, Platform, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

export function NewTrip({ navigation }: { navigation: any }) {

  function Passenger() {
    navigation.navigate('Passenger');
  }

  function Traveler() {
    navigation.navigate('Traveler');
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Which are you in this trip?</Text>

        <Pressable style={styles.button} onPress={Passenger}>
          <Image
              style={styles.image}
              source={require('../assets/images/ícones/passenger.png')}
            />
          <Text style={styles.lables}>Passenger</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={Traveler}>
          <Image
                style={styles.image}
                source={require('../assets/images/ícones/traveler.png')}
              />
          <Text style={styles.lables}>Traveler</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    paddingBottom: 100,
    marginLeft: -80,
    fontSize: 20,
  },

  button: {
    backgroundColor: "#1D5F98",
    width: 300,
    height: 170,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginTop: 20,
  },

  lables: {
    color: "white",
    padding: 20,
    fontSize: 20,
  },
});
