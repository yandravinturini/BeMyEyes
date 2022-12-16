import { Dimensions, StyleSheet, Text, View, Platform, Pressable, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { Card } from '../shared_functions/card';
import { Trip } from '../shared_functions/trip';
import  Carousel  from '../shared_functions/carousel'

const { width, height } = Dimensions.get("window");

export function HomePage({ navigation }: { navigation: any }) {

    const trip = new Trip("Ric", "Nuno", "Copenhagen", "Denmark", "2022-10-25", "2022-12-31", "viajante", "https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80", "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")

  function DetailsPos(trip: Trip) {
    navigation.navigate('PosConfirmTrip', {trip: trip},);
  }


  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.titles}>Your Trips</Text>
      <View style={styles.ongoing}>
        <Pressable onPress={() => DetailsPos(trip)}>
          {Card(trip)}
        </Pressable>
      </View>

      <Text style={styles.titles}>Latest Trips</Text>
      <View>
        <Carousel navigation={navigation} />
      </View>

      <Text style={styles.titleDestination}>Explore the world</Text>
      <View>
        <MapView provider="google"
          style={styles.map}
          initialRegion={{
            latitude: 10,
            longitude: -2,
            latitudeDelta: 100,
            longitudeDelta: 100,
          }} />
      </View>
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: "#EBEBEB",
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },


  titles: {
    marginTop: 10,
    paddingBottom: 20,
    marginLeft: -250,
    fontSize: 20,
  },

  titleDestination: {
    paddingBottom: 20,
    marginLeft: -200,
    fontSize: 20,
  },

  ongoing:{
    height:100,
  },

  carouselItem: {
    width: '100%',
    height: '20%',
  },

  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },

  profilePic: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  map: {
    width: width,
    height: 600,
  }

});