import { StyleSheet, Text, View, Button, ScrollView, Platform, Pressable } from 'react-native';
import { Card } from '../shared_functions/card';
import { Trip } from '../shared_functions/trip';

export function TripPage({ navigation }: { navigation: any }) {

  const trip1 = new Trip("Ana", "João", "Rio de Janeiro", "2022-03-17", "2022-03-25", "passageiro", "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80", "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip2 = new Trip("Leo", "Jimmy", "New York", "2022-08-12", "2022-09-01", "passageiro", "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip3 = new Trip("Isa", "Hana", "Amsterdam", "2022-11-15", "2022-11-18", "passageiro", "https://images.unsplash.com/photo-1580996378027-23040f16f157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", "https://images.unsplash.com/photo-1542343633-ce3256f2183e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip4 = new Trip("Ric", "Nuno", "Copenhagen", "2022-10-25", "2022-10-27", "viajante", "https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
  const trip5 = new Trip("Dan", "Ellon", "Porto", "2022-05-20", "2022-05-24", "passageiro", "https://images.unsplash.com/photo-1569959220744-ff553533f492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80", "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")
  const trip6 = new Trip("Caroline", "Beatrice", "Seoul", "2022-02-23", "2022-03-10", "passageiro", "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80", "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
  const trip7 = new Trip("Ailynn", "Nuno", "Havana", "2022-10-03", "2022-10-07", "viajante", "https://images.unsplash.com/photo-1588614380453-69f03be5e097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")

  let pastTrips = [trip1, trip2, trip3, trip6, trip7];
  let ongoingTrips = [trip4, trip5];

  var pastTripsCards = [];
  var ongoingTripsCards = [];

  function CreateNewTrip() {
    navigation.navigate('CreateNewTrip');
  }

  function DetailsPage() {
    navigation.navigate('PosConfirmTrip');
  }

  for (let i = 0; i < pastTrips.length; i++) {
    pastTripsCards.push(Card(pastTrips[i]))
  }

  for (let i = 0; i < ongoingTrips.length; i++) {
    ongoingTripsCards.push(Card(ongoingTrips[i]))
  }

  ongoingTripsCards.map((item, index) => (<View key={index.toString()}>{item}</View>))
  pastTripsCards.map((item, index) => (<View key={index.toString()}>{item}</View>))

  return (
    <View style={styles.ScrollView}>
      <ScrollView>
        {/* <Button title="criar conteúdo" onPress={CreateNewTrip } /> */}
        <View>
          <Text style={styles.title}>Ongoing trips</Text>
          <Pressable onPress={DetailsPage}>
            {ongoingTripsCards}
          </Pressable>
        </View>

        <View>
          <Text style={styles.title}>Past trips</Text>
          <Pressable onPress={DetailsPage}>
            {pastTripsCards}
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? /* StatusBar.currentHeight */ 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
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

