import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import {Trip} from '../shared_functions/trip';


export function Card(trip:Trip) {    

  return (
    <TouchableOpacity>
    <View style={styles.card}>
        <View style={styles.destinationImage}> 
          <Text>  </Text>
        </View>  

        <View style={styles.aboutTrip}> 
          <View>
            <Text style={styles.destination}> {trip.place} </Text>
          </View>
          <View>
            <Text style={styles.startDate}> {(trip.startDate).toDateString()} </Text>
          </View>
        </View>  

        <View style={styles.aboutPartner}> 
          <View style={styles.profileImage}>
            <Text> </Text>
          </View>
          <View style={styles.partner}>         
            <Text style={{color:'#EBEBEB', fontSize: 13}}> @{trip.traveller} </Text>
          </View>        
        </View>  
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#1D5F98',
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },

  destinationImage: {
    backgroundColor: 'gray',
    height: 90,
    width: 80,
    marginRight: 5,
  },

  aboutTrip: {
    width: 150,
    margin: 4,
  },

  aboutUser: {
    width: 75,
    margin: 4,
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 17,
    color: "#EBEBEB",
  },

  destination: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 19,
    lineHeight: 25,
    color: "#EBEBEB",
    height:40,
    padding:5,
    textColor:'#EBEBEB',
  },

  startDate: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 17,
    color: "#EBEBEB",
    height:20,
    padding:5,
    textColor:'#EBEBEB', 
  },


  user: {
    // fontFamily: 'Inter',
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 16,
    color: "#EBEBEB",
    height: 80,
    width: "50%",
    marginRight: 5,

  },

  aboutPartner: {
    marginLeft:'auto',
    marginRight: 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#EBEBEB',
  },


  profileImage:{
    backgroundColor: 'white',
    borderRadius: 30,
    height: 50,
    width: 50,
    padding:5,
  },

  partner: {
    padding:2,
    height: 16,
  },

});
