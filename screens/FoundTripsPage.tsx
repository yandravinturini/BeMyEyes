import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState} from "react";
import { StyleSheet, Text, TextInput, ScrollView, View, Platform, TouchableOpacity, Image, Touchable } from 'react-native';

import {Trip} from '../shared_functions/trip';
import {Card} from '../shared_functions/card'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import green_arrow from '../assets/images/green_arrow.png';
import gray_arrow from '../assets/images/gray_arrow.png';

export function FoundTrips({route}: {route:any}){    
  const [counter, setCounter] = useState(0)
  const [orderAsc, setOrderAsc] = useState(1)
 // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };

  const checkImage = () => {
    if (!location2.trim()) {
      return gray_arrow;
    }
    return green_arrow;
  }


  const trip1 = new Trip("", "Joana", "Cairo", "2023-05-3", "2022-05-10", "passageiro")
  const trip2 = new Trip("", "Robert", "Cairo", "2023-01-23", "2022-01-31", "passageiro")
  const trip3 = new Trip("", "Carlo", "Cairo", "2023-01-27", "2022-02-4", "passageiro")
  const trip4 = new Trip("", "Isa", "Berlin", "2023-03-26", "2023-03-30", "passageiro")
  const trip5 = new Trip("", "Anne Marie", "Paris", "2023-03-27", "2023-04-10", "passageiro")
  const trip6 = new Trip("", "Fred", "Madrid", "2023-05-3", "2023-5-10", "passageiro")
  const trip7 = new Trip("", "Polly", "Monte Carlo", "2023-05-3", "2023-05-10", "passageiro")

  const [location, setLocation] = useState("");
  const [location2, setLocation2] = useState("");

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

  // const checkColor = () => {
  //   if (!location_.trim()) {
  //     return "#EBEBEB";
  //   }
  //   return "#88B83B";
  // }

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
    
    if (orderAsc === 0){
      futureTrips.sort((a, b) => (a.startDate < b.startDate ? -1 : 1));
    }
    
    if(orderAsc == 1){
      // trocar sort descendente por hora de adição
      futureTrips.sort((a, b) => (a.startDate > b.startDate ? -1 : 1));
    }

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
      return <>{futureTripsCards.map((item, index) => (<View key={index.toString()}>{item}</View>))}</>
  }

    else{
      return(
        <>{<Text style={styles.text_no_dest}>No trips for this destination...</Text>}</>
      )
      }
  }

  return (
      <View style={styles.container}>
        <ScrollView>
       <Text style={styles.textWhereTo}>Where to?</Text>
          <View style={{ flexDirection: 'row', alignItems:'center'}}>
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
           <View style={{ flexDirection: 'row', alignItems:'center', marginTop: 30 }}>
              <View style={styles.filters}>
               <Text style={styles.text}>Filters</Text>
              </View>
              <View style={styles.last}>
               <TouchableOpacity style={styles.lastButton} onPress={onPressLast}> 
               {orderAsc? <Text style={styles.textButton}>Incoming</Text> : <Text style={styles.textButtonSelected}>Incoming</Text>}
               </TouchableOpacity>
              </View>
              <View style={styles.datedown}>
                 <TouchableOpacity style={styles.lastButton}>
                 <Text style={styles.textButton}>Date</Text>
                 </TouchableOpacity>
              </View>
          </View>
          <View style={styles.container3}>{filterLocation()}</View>
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
    marginBottom: 30, 
    marginTop: 0,
    backgroundColor: "#EBEBEB",
  },

  // container2: {
  //   flex: 2,
  //   flexGrow: 0,  /* do not grow   - initial value: 0 */
  //   flexShrink: 0,  /* do not shrink - initial value: 1 */
  //   flexBasis: 30,
  //   alignItems: 'flex-start',
  //   justifyContent: 'center',
  //   paddingLeft: 0,
  //   backgroundColor: "#EBEBEB",
  //   marginBottom: 10,
  //   width: '100%',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  // },

  container3: {
    backgroundColor: "#EBEBEB",
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 0,
    marginTop: 20,
    height: 700,
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
    fontFamily: 'Inter',
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
    fontFamily: 'Inter',
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
    fontFamily: 'Inter',
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