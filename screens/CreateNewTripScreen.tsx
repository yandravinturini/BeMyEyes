import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

// import { DatePicker } from 'react-datepicker';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Platform,
} from "react-native";

export function CreateNewTripScreen({ navigation }: { navigation: any }) {

  function turnBackToMain() {
    navigation.navigate('MainTripPage');
  }

  const [whereTo, setUsername] = useState("");
  const [isSelectedTexts, setSelectionTexts] = useState(false);
  const [isSelectedPhotosVideos, setSelectionPhotosVideos] = useState(false);
  const [isSelectedDiary, setSelectionDiary] = useState(false);
  const [isSelectedAudioCalls, setSelectionAudioCalls] = useState(false);
  const [isSelectedVideoCalls, setSelectionVideoCalls] = useState(false);
  //   var date = new Date("08-08-1999");
  //   const [startDate, setStartDate] = useState(new Date());
  // function DetailsTrip() {
  //   navigation.navigate('PreConfirmScreen');
  // }
  const [dateStart, setDateStart] = useState(new Date());
  const [datePickerStart, setDatePickerStart] = useState(false);

  const [dateEnd, setDateEnd] = useState(new Date());
  const [datePickerEnd, setDatePickerEnd] = useState(false);
  const [counterDateStart, setCounterDateStart] = useState(0)
  const [counterDateEnd, setCounterDateEnd] = useState(0)

  function showDatePickerStart() {
    setDatePickerStart(true);
  };

  function showDatePickerEnd() {
    setDatePickerEnd(true);
  };

  function onDateSelectedStart(event, value) {
    setDateStart(value);
    setDatePickerStart(false);
    setCounterDateStart(1);
  };

  function onDateSelectedEnd(event, value) {
    setDateEnd(value);
    setDatePickerEnd(false);
    setCounterDateEnd(1);
  };

  return (
    <View style={styles.container}>

      <View style={styles.whereToBox}>
        <Text style={styles.textWhereTo}>Where to?</Text>

        <TextInput
          style={styles.inputWhereTo}
          placeholder=""
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.startingDateBox}>
        <TouchableOpacity onPress={showDatePickerStart}>
          <Text style={styles.startingDateText}>Starting date</Text>
        </TouchableOpacity>
        {datePickerStart && (
          <DateTimePicker
            value={dateStart}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelectedStart}
          />
        )}
        {counterDateStart ? <Text style={styles.datestyle}>{dateStart.toDateString()}</Text> : <Text style={styles.datestyle}></Text>}
      </View>

      <View style={styles.endingDateBox}>
        <TouchableOpacity onPress={showDatePickerEnd}>
          <Text style={styles.endingDateText}>Endind date</Text>
        </TouchableOpacity>
        {datePickerEnd && (
          <DateTimePicker
            value={dateEnd}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelectedEnd}
          />
        )}
        {counterDateEnd ? <Text style={styles.datestyle}>{dateEnd.toDateString()}</Text> : <Text style={styles.datestyle}></Text>}
      </View> 

      <Text style={styles.intimacyText}>Intimacy settings</Text>

      <View style={styles.intimacyBox}>
        <View style={styles.columnLeft}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelectedTexts}
              onValueChange={setSelectionTexts}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Texts</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelectedPhotosVideos}
              onValueChange={setSelectionPhotosVideos}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Photos/Videos</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelectedDiary}
              onValueChange={setSelectionDiary}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Diary</Text>
          </View>

        </View>


        <View style={styles.columnRight}>

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelectedAudioCalls}
              onValueChange={setSelectionAudioCalls}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Audio Calls</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelectedVideoCalls}
              onValueChange={setSelectionVideoCalls}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Video Calls</Text>
          </View>

        </View>

      </View>
      <View style={{ marginBottom: 200 }}>
        <TouchableOpacity style={styles.publishButton} onPress={turnBackToMain}>
          <Text style={styles.insideButton}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "flex-start",
    // fontFamily: 'Inter',
    fontStyle: 'normal',
  },

  whereToBox: {

  },

  textWhereTo: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "black",
  },

  inputWhereTo: {
    fontSize: 17,
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 40,
    width: 360,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  startingDateBox: {

  },

  startingDateText: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "black",
  },

  endingDateBox: {

  },

  endingDateText: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "black",
  },

  intimacyBox: {
    flex: 1,
    flexDirection: 'row',


  },

  intimacyText: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "black",
    paddingLeft: 20,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  checkbox: {
    alignSelf: "center",
  },

  label: {
    margin: 10,
    marginRight: 15,
  },

  columnLeft: {

  },

  columnRight: {

  },
  publishButton: {
    backgroundColor: "#1D5F98",
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderRadius: 15,
  },
  insideButton: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 20,
  },
  datestyle: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 10,
    width:'100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color:'#88B83B',
},



});