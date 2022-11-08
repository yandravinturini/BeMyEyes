import { StyleSheet, Text, View, Button, ScrollView, Platform } from 'react-native';
import {Card} from '../shared_functions/card';
import {Trip} from '../shared_functions/trip';

export function TripPage(){    

  const trip1 = new Trip("Ana", "João","Rio de Janeiro", "2022-03-17", "2022-03-25", "passageiro")
  const trip2 = new Trip("Leo", "Jimy","New York", "2022-08-12", "2022-09-01", "passageiro")
  const trip3 = new Trip("Isa", "Hana","Amsterdam", "2022-11-15", "2022-11-18", "passageiro")
  const trip4 = new Trip("Ric", "Nuno","Copenhagen", "2022-10-25", "2022-10-27", "viajante")
  const trip5 = new Trip("Dan", "Elon","Porto", "2022-05-20", "2022-05-24", "passageiro")

  let pastTrips = [trip1, trip2, trip3, trip4, trip5];
  let ongoingTrips = [trip4, trip5];

  var pastTripsCards = [];
  var ongoingTripsCards = [];

	for(let i = 0; i < pastTrips.length; i++){
		pastTripsCards.push(Card(pastTrips[i]))
	}

  for(let i = 0; i < ongoingTrips.length; i++){
		ongoingTripsCards.push(Card(ongoingTrips[i]))
	}

  return (
    <View style={styles.ScrollView}>
      <View style={styles.ongoingTrips}>
        <Text style={styles.title}>Ongoing trips</Text>
        {ongoingTripsCards}
      </View>

      <View style={styles.pastTrips}>
        <Text style={styles.title}>Past trips</Text>
        {pastTripsCards}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',

  },

  ongoingTrips: {
    height: 20,
  },

  pastTrips: {
    height: 300,
  },

  title: {
    marginBottom: 10,
    marginTop: 30,
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 29,
  }

});

