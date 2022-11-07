import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, Pressable, View, Platform, TouchableOpacity, FlatList } from 'react-native';
import {Trip} from '../shared_functions/trip';
import {Card} from '../shared_functions/card'
import { TabRoutes } from '../routes/tab';

export function FoundTrips({route}){    
  const [counter, setCounter] = useState(0)

  const trip1 = new Trip("", "Joana", "Cairo", "2023-05-3", "2022-05-10")
  const trip2 = new Trip("", "Robert", "Cairo", "2023-01-23", "2022-01-31")
  const trip3 = new Trip("", "Carlo", "Cairo", "2023-01-27", "2022-02-4")
  const trip4 = new Trip("", "Isa", "Berlin", "2023-03-26", "2023-03-30")
  const trip5 = new Trip("", "Anne Marie", "Paris", "2023-03-27", "2023-04-10")
  const trip6 = new Trip("", "Fred", "Madrid", "2023-05-3", "2023-5-10")
  const trip7 = new Trip("", "Polly", "Monte Carlo", "2023-05-3", "2023-05-10")

  const [location, setLocation] = useState("");
  const [location_, setLocation_] = useState("");

  const onPressFunction = () =>  {
    setLocation(location => location_);
    setCounter(counter => counter + 1);
  }
  

  const checkLocation = () => {
    //Check for the Location TextInput
    if (!location_.trim()) {
      return 1;
    }
    return 0;
  };

  const checkColor = () => {
    if (!location_.trim()) {
      return "#EBEBEB";
    }
    return "#88B83B";
  }

  const choosePlaceholder = () =>{
    if (counter === 0){
      return route.params.firstLoc;
    }
    else{
      return '';
    }
  }

  var futureTripsCards = [];


  const filterLocation = () =>{
    futureTripsCards = [];
    let futureTrips = [trip1, trip2, trip3, trip4, trip5, trip6, trip7];

    if (counter === 0){
      for(let i = 0; i < futureTrips.length; i++){
        if (futureTrips[i].place === route.params.firstLoc){
          futureTripsCards.push(Card(futureTrips[i]))
        }
      }
    }

    else{
      for(let i = 0; i < futureTrips.length; i++){
        if (futureTrips[i].place === location){
          futureTripsCards.push(Card(futureTrips[i]))
        }
      }
    }

    if (futureTripsCards.length > 0){
      return futureTripsCards;
    }

    else{
      return(
        <Text style={styles.text_no_dest}>No trips for this destination...</Text>
      )
    }
  }
    
  const defineHeight = () =>{
    let futureTrips = [trip1, trip2, trip3, trip4, trip5, trip6, trip7];
    futureTripsCards = [];

    if (counter === 0){
      for(let i = 0; i < futureTrips.length; i++){
        if (futureTrips[i].place === route.params.firstLoc){
          futureTripsCards.push(Card(futureTrips[i]))
        }
      }
    }

    else{
      for(let i = 0; i < futureTrips.length; i++){
        if (futureTrips[i].place === location){
          futureTripsCards.push(Card(futureTrips[i]))
        }
      }
    }

    if (futureTripsCards.length > 0){
      return  100*futureTripsCards.length;
    }

    else{
      return 700;
    }
  }

// onChangeText={(location) => setLocation(location)}>
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.container1}>
        <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <TextInput
              style={styles.input_location}
              placeholder={choosePlaceholder()}
              placeholderTextColor="black"
              onChangeText={(location_) => setLocation_(location_)}>
            </TextInput>
            <TouchableOpacity style={styles.button}
              disabled={checkLocation() ? true : false}
              onPress={onPressFunction}
            >
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.125 1L25.375 12.25L14.125 23.5M23.8125 12.25H1" stroke={checkColor()} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <View style={styles.filters}>
              <Text style={styles.text}>Filters</Text>
            </View>
            <View style={styles.late}>
              <Text style={styles.text}>Last</Text>
            </View>
            <View style={styles.datedown}>
              <Text style={styles.text}>Date</Text>
            </View>
            <View style={styles.intimacy}>
              <Text style={styles.text}>Intimacy</Text>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={{height: defineHeight()}}>
          ` {filterLocation()}`
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 0,
  },

  container1: {
    flex: 1,
    flexGrow: 0,  /* do not grow   - initial value: 0 */
    flexShrink: 0,  /* do not shrink - initial value: 1 */
    flexBasis: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    margin: 30, 
  },

  container2: {
    flex: 2,
    flexGrow: 0,  /* do not grow   - initial value: 0 */
    flexShrink: 0,  /* do not shrink - initial value: 1 */
    flexBasis: 30,
    alignItems: 'flex-start',
  //  justifyContent: 'center',
    paddingLeft: 0,
    backgroundColor: "#EBEBEB",
  },

  container3: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 0,
    marginTop: 0,
    height: 700,
    backgroundColor: "#EBEBEB",
  },


  filters: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 0,
    width: '40%',
    margin: 0,
    padding: 0,
    backgroundColor: "#EBEBEB",
  },

  datedown: {
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '15%',
    margin: 5,
    marginTop: 0,
  },

  intimacy: {
    backgroundColor: "#EBEBEB",
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '15%',
    margin: 5,
    marginTop: 0,
  },

  late: {
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '15%',
    height: 40,
    margin: 2,
    marginTop: 0,
  },
  
  futureTrips: {
    height: 700,
  },

  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
    alignSelf: 'flex-start',
  },

  text_no_dest:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "white",
    alignSelf: 'center',
  },

  input_location: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 17,
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 42,
    width: 260,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 0 ,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  button: {
    marginTop: 20,
    backgroundColor: 'white',
    marginRight: 'auto',
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingRight: 10,
  }

});
