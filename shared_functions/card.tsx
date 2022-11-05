import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Trip} from '../shared_functions/trip';


export function Card(trip:Trip) {    

  return (
    <View style={styles.card}>

      <View style={styles.destinationImage}> 
      </View>  

      <View style={styles.aboutTrip}>
        <View style={styles.destination}>
          <text>{trip.place}</text>    
        </View>  
        <View style={styles.startDate}>
          <text>{trip.startDate.getDate()+"-"+(trip.startDate.getMonth()+1)+"-"+ trip.startDate.getFullYear()}</text>    
        </View>
      </View>
 
      <View style={styles.aboutUser}>
        <View style={styles.profileImage}>  
        </View> 
        <View style={styles.user}>  
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

  },

  destination: {

  },

  startDate: {

  },

  profileImage:{
    backgroundColor: 'red',
    width: 75,

  },

  user: {

  },

});
