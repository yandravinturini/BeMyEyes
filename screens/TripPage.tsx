import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import Card from '../shared_functions/card'
import {Trip} from '../shared_functions/trip';

export function Trip_page(){    

  const trip1 = new Trip("Ana", "João","Cairo", "2022-03-25", "2022-03-25")

  let pastTrips = [trip1, trip1, trip1];
  let ongoingTrips = [trip1, trip1, trip1];

  var pastTripsCards = [];
  var ongoingTripsCards = [];

	for(let i = 0; i < pastTrips.length; i++){

		pastTripsCards.push(
			<View>
        Card(pastTrips[i])
			</View>
		)
	}

  for(let i = 0; i < ongoingTrips.length; i++){

		ongoingTripsCards.push(
			<View>
        Card(ongoingTrips[i])
			</View>
		)
	}


  return (
    <View>
      <View style={styles.container}>
        <Text>Ongoing trips</Text>
        {/* {ongoingTripsCards} */}
      </View>
      <View style={styles.container}>
        <Text>Past trips</Text>
        {/* {pastTripsCards} */}
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
  },
});

