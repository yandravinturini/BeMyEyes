import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Trip} from '../shared_functions/trip';


export function Card(trip:Trip) {    

  return (
    <View style={styles.card}>
      <View style={styles.destinationImage}> 
      </View>    
      <View style={styles.destination}>
         <text>{trip.place}</text>    
      </View>    
      <View style={styles.startDate}>
         <text>{trip.startDate.getDate()+"-"+(trip.startDate.getMonth()+1)+"-"+ trip.startDate.getFullYear()}</text>    
      </View> 
      <View style={styles.profileImage}>  
      </View> 

    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#1D5F98',
    width: '100%',
    height: 75,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,

  },

  destination: {

  },

  startDate: {

  },

  destinationImage: {
    backgroundColor: 'pink',
    width: 75,

  },

  profileImage:{
    backgroundColor: 'red',
    width: 75,

  }

});
