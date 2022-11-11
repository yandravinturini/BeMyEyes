import React from 'react';
import {  Dimensions,StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { Trip } from '../shared_functions/trip';

const { width, height } = Dimensions.get("window");


export function Card(trip: Trip) {

  return (
    <View style={styles.card}>
      <Image source={{uri: trip.imageIcon} } style={styles.destinationImage}/>

      <View style={styles.aboutTrip}>
        <View>
          <Text style={styles.destination}> {trip.place} </Text>
        </View>
        <View>
          <Text style={styles.startDate}> {(trip.startDate).toDateString()} </Text>
        </View>
      </View>

      <View style={styles.aboutPartner}>
        <Image source={{uri: trip.profileIcon}} style={styles.profileImage}/>
        <View >
          <Text style={styles.partner}> @{trip.traveller} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#1D5F98',
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    width: width,
  },

  destinationImage: {
    height: 90,
    width: 80,
  },

  aboutTrip: {
    marginLeft: 5,
  },

  aboutUser: {
    width: 75,
    fontStyle: "normal",
    fontSize: 14,
    color: "#EBEBEB",
  },

  destination: {
    fontStyle: "normal",
    fontSize: 19,
    color: "#EBEBEB",
    height: 40,
    textColor: '#EBEBEB',
  },

  startDate: {
    fontStyle: "normal",
    fontSize: 12,
    color: "#EBEBEB",
    padding: 5,
    textColor: '#EBEBEB',
  },



  aboutPartner: {
    marginLeft: 'auto',
    marginRight: 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#EBEBEB',
  },


  profileImage: {
    borderRadius: 30,
    height: 50,
    width: 50,
    padding: 5,
  },

  partner: {
    textAlign: "right",
    padding: 2,
    color: "#EBEBEB",
  },

});
