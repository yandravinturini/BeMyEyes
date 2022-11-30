import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState} from "react";
import { StyleSheet, Text, TextInput, ScrollView, View, Platform, TouchableOpacity, Image, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Trip} from '../shared_functions/trip';
import {Card} from '../shared_functions/card'
import green_arrow from '../assets/images/green_arrow.png';
import gray_arrow from '../assets/images/gray_arrow.png';

export function FoundTrips({ route, navigation }){    
  const [counter, setCounter] = useState(0)
  const [orderAsc, setOrderAsc] = useState(1)
  const [counterDate, setCounterDate] = useState(0)

  const checkImage = () => {
    if (!location2.trim()) {
      return gray_arrow;
    }
    return green_arrow;
  }

  function DetailsPage(trip: any){
    navigation.navigate('PreConfirmTrip', {trip: trip,});
  }

  const trip1 = new Trip("", "Joana", "Cairo", "2023-05-03", "2023-05-10", "passageiro", "https://images.unsplash.com/photo-1562842523-6d492ddc3e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip2 = new Trip("", "Robert", "Cairo", "2023-01-23", "2023-01-31", "passageiro", "https://images.unsplash.com/photo-1561778498-2d8ef2ade19e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=973&q=80", "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80")
  const trip3 = new Trip("", "Carlo", "Cairo", "2023-01-27", "2023-02-04", "passageiro", "https://images.unsplash.com/photo-1569531955317-390fbbc73f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip4 = new Trip("", "Isa", "Berlin", "2023-03-26", "2023-03-30", "passageiro", "https://images.unsplash.com/photo-1552553302-9211bf7f7053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", "https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80")
  const trip5 = new Trip("", "Anne Marie", "Paris", "2023-03-27", "2023-04-10", "passageiro", "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
  const trip6 = new Trip("", "Fred", "Madrid", "2023-05-03", "2023-5-10", "passageiro", "https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip7 = new Trip("", "Polly", "Monte Carlo", "2023-05-03", "2023-05-10", "passageiro", "https://images.unsplash.com/photo-1570003550321-14dd053a5956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80", "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

  const [location, setLocation] = useState("");
  const [location2, setLocation2] = useState("");

  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
  
  function showDatePicker(){
    setDatePicker(true);
  };
  
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
    setCounterDate(1);
  };

  function daysBetweenDates(date1, date2){
    const diff   = date1 - date2;
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    return diffInDays;
  }

  const onPressFunction = () =>  {
    setLocation(location => location2);
    setLocation2(location2 => '');
    setCounter(counter => counter + 1);
  }
  

  const checkLocation = () => {
    //Check for the Location TextInput
    if (!location2.trim()) {
      return 1;
    }
    return 0;
  };

  const choosePlaceholder = () =>{
    if (counter === 0){
      return route.params.firstLoc;
    }
    else{
      return '';
    }
  }

  var futureTripsCards = [];

  const onPressLast = () => {
    if (orderAsc === 0){
      setOrderAsc(orderAsc => 1)
    }
    else{
      setOrderAsc(orderAsc => 0)
    }
  }

  const filterLocation = () =>{
    futureTripsCards = [];
    let futureTrips = [trip1, trip2, trip3, trip4, trip5, trip6, trip7];
    var trips = [];
    
    if (orderAsc === 0){
      futureTrips.sort((a, b) => (a.startDate < b.startDate ? -1 : 1));
    }
    
    if(orderAsc == 1){
      // trocar sort descendente por hora de adição
      futureTrips.sort((a, b) => (a.startDate > b.startDate ? -1 : 1));
    }

    if (counter === 0){
      if (counterDate === 0){
        for(let i = 0; i < futureTrips.length; i++){
          if (futureTrips[i].place.toLocaleLowerCase() === route.params.firstLoc.toLocaleLowerCase()){
            futureTripsCards.push(Card(futureTrips[i]))
            trips.push(futureTrips[i])
          }
        }
      }
      else{
        for(let i = 0; i < futureTrips.length; i++){
          if (futureTrips[i].place.toLocaleLowerCase() === route.params.firstLoc.toLocaleLowerCase() && futureTrips[i].startDate.toDateString() === date.toDateString()){
            futureTripsCards.push(Card(futureTrips[i]))
            trips.push(futureTrips[i])
          }
        }
        if (futureTripsCards.length === 0){
          for(let i = 0; i < futureTrips.length; i++){
            const datediff = daysBetweenDates(date, futureTrips[i].startDate)
            if (futureTrips[i].place.toLocaleLowerCase() === route.params.firstLoc.toLocaleLowerCase() && (datediff < 5 && datediff > -5)){
              futureTripsCards.push(Card(futureTrips[i]))
              trips.push(futureTrips[i])
            }
          }
        }
      }
    }

    else{
      if (counterDate === 0 ){
        for(let i = 0; i < futureTrips.length; i++){
          if (futureTrips[i].place.toLocaleLowerCase() === location.toLocaleLowerCase()){
            futureTripsCards.push(Card(futureTrips[i]))
            trips.push(futureTrips[i])
          }
        }
      }
      else{
        for(let i = 0; i < futureTrips.length; i++){
          if (futureTrips[i].place.toLocaleLowerCase() === location.toLocaleLowerCase() && futureTrips[i].startDate.toDateString() === date.toDateString()){
            futureTripsCards.push(Card(futureTrips[i]))
            trips.push(futureTrips[i])
          }
        }
        if (futureTripsCards.length === 0){
          for(let i = 0; i < futureTrips.length; i++){
            const datediff = daysBetweenDates(date, futureTrips[i].startDate);
            if (futureTrips[i].place.toLocaleLowerCase() === location.toLocaleLowerCase() && (datediff < 5 && datediff > -5)){
              futureTripsCards.push(Card(futureTrips[i]))
              trips.push(futureTrips[i])
            }
          }
        }
      }
    }


   if (futureTripsCards.length > 0){
      return <>
        {futureTripsCards.map((item, index) => (
          <View key={index.toString()}>
          <Pressable onPress={() => DetailsPage(trips[index])}>
            {item}
          </Pressable>
          </View>))}
      </>
  }

    else{
      return(
        <>{<Text style={styles.text_no_dest}>Sorry! We were unable to find a trip for your desires...</Text>}</>
      )
      }
  }

  return (
      <View style={styles.container}>
          {datePicker && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onDateSelected}
                />
          )}
        <ScrollView>
          <View style={styles.containerTop}>
            <View style={styles.containerWhereTo}>
              <Text style={styles.textWhereTo}>Where to?</Text>
            </View>
            <View style={styles.containerSearch}>
                <TextInput
                  style={styles.input_location}
                  placeholder={choosePlaceholder()}
                  placeholderTextColor="black"
                  onChangeText={(location2) => setLocation2(location2)}
                />
                  <TouchableOpacity style={styles.button}
                  disabled={checkLocation() ? true : false}
                  onPress={onPressFunction}>
                  <Image style={styles.arrowStyle} source={checkImage()}></Image>              
                </TouchableOpacity>
            </View> 
          </View>
          <View style={styles.containerFilters}>
              <View style={styles.filters}>
               <Text style={styles.text}>Filters</Text>
              </View>
              <View style={styles.last}>
               <TouchableOpacity style={styles.lastButton} onPress={onPressLast}> 
               {orderAsc? <Text style={styles.textButton}>Incoming</Text> : <Text style={styles.textButtonSelected}>Incoming</Text>}
               </TouchableOpacity>
              </View>
              <View style={styles.datedown}>
                 <TouchableOpacity style={styles.lastButton} onPress={showDatePicker}>
                 {counterDate? <Text style={styles.textButtonSelected}>Date</Text> : <Text style={styles.textButton}>Date</Text>}
                 </TouchableOpacity>
              </View>
          </View>
          <View style={styles.containerCards}>
            {filterLocation()}
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
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 0,
  },

  containerTop:{
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '30%',
    paddingLeft: 0,
  },

  containerWhereTo:{
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '30%',
    paddingLeft: 0,
  },

  containerSearch: {
    flex: 2,
    flexDirection: 'row',
    flexGrow: 0,  /* do not grow   - initial value: 0 */
    flexShrink: 0,  /* do not shrink - initial value: 1 */
    flexBasis: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    marginBottom: 30, 
    marginTop: 0,
    backgroundColor: "#EBEBEB",
    height: '30%',
  },

  containerFilters: {
    flexDirection: 'row', 
    alignItems:'center', 
    marginTop: 30,
  },

  containerCards: {
    backgroundColor: "#EBEBEB",
    flex: 3,
 //   alignItems: 'center',
 //   justifyContent: 'center',
    height: '50%',
    paddingLeft: 0,
    marginTop: 20,
    position: 'relative',
  },


  filters: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alighSelf: 'flex-start',
    paddingLeft: 0,
    width: "30%",
    backgroundColor: "#EBEBEB",
  },

  datedown: {
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '30%',
    margin: 2,
    marginTop: 0,
  },

  intimacy: {
    backgroundColor: "#EBEBEB",
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '30%',
    margin: 2,
    marginTop: 0,
  },

  last: {
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '30%',
    height: 40,
    margin: 2,
    marginTop: 0,
  },
  
  lastButton: {
    backgroundColor: '#88B83B',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    width: '100%',
    height: 30,
    margin: 2,
    marginTop: 0,
  },

  textButton: {
    // fontFamily: 'Inter',
    alignSelf: 'center',
    fontStyle: 'normal',
    color: "#EBEBEB",
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  textButtonSelected: {
    // fontFamily: 'Inter',
    alignSelf: 'center',
    fontStyle: 'normal',
    color: '#1D5F98',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },


  text: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    color:"black",
    alignSelf: 'flex-start',
  },

  textWhereTo: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 25,
    paddingTop: 30,
    color:"black",
    alignSelf: 'center',
    backgroundColor: '#EBEBEB',
  },

  text_no_dest:{
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 50,
    color: "black",
    alignSelf: 'center',
    alignItems: 'center',
    width: 333,
  },

  input_location: {
    // fontFamily: 'Inter',
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
  },

  arrowStyle:{
    width: 27,
    height: 25,
  },


});


/* <DateTimePickerModal
                 onPress={showDatePicker}
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                /> */


                /* <View style={styles.intimacy}>
              <TouchableOpacity style={styles.lastButton}>
                <Text style={styles.textButton}>Intimacy</Text>
              </TouchableOpacity>
            </View> */