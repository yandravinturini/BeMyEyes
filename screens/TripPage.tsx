import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import {Card} from '../shared_functions/card'
import {Trip} from '../shared_functions/trip';

export function Trip_page(){    

  const trip1 = new Trip("Ana", "João","Rio de Janeiro", "2022-03-17", "2022-03-25")
  const trip2 = new Trip("Leo", "Jimy","Nova Iorque", "2022-08-12", "2022-09-01")
  const trip3 = new Trip("Isa", "Hana","Amsterdam", "2022-11-15", "2022-11-18")
  const trip4 = new Trip("Ric", "Nuno","Copenhagem", "2022-10-25", "2022-10-27")
  const trip5 = new Trip("Dan", "Elon","Porto", "2022-05-20", "2022-05-24")

  let pastTrips = [trip1, trip2, trip3];
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
    <View>
      <View style={styles.container}>
        <Text>Ongoing trips</Text>
        {ongoingTripsCards}
      </View>
      <View style={styles.container}>
        <Text>Past trips</Text>
        {pastTripsCards}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 300,

  },
});

