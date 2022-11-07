import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Trip} from '../shared_functions/trip';


export function Card(trip:Trip) {    

  return (
    <View style={styles.card}>

      <View style={styles.destinationImage}> 
      </View>  

      <View style={styles.aboutTrip}>
        <View>
          <Text style={styles.destination}>{trip.place}</Text>    
        </View>  
        <View>
          <Text style={styles.startDate}>{trip.startDate.getDate()+"-"+(trip.startDate.getMonth()+1)+"-"+ trip.startDate.getFullYear()}</Text>    
        </View>
      </View>
 
      <View style={styles.aboutUser}>
        <View style={styles.profileImage}>  
        </View> 
        <View >  
          <Text style={styles.user}>{'@'+ trip.traveller}</Text>
        </View> 
      </View>


    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#1D5F98',
    width: '100%',
    height: 75,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,

  },

  destinationImage: {
    width: 75,

  },

  aboutTrip: {
    width: 150,
    margin: 4,
  },

  aboutUser: {
    width: 75,
    margin: 4,
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 17,
    color: "#EBEBEB",
  },

  destination: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 19,
    lineHeight: 25,
    color: "#EBEBEB",
  },

  startDate: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 17,
    color: "#EBEBEB",
  },

  profileImage:{
    backgroundColor: 'red',
    width: 75,
  },

  user: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 16,
    color: "#EBEBEB",
  },

});
