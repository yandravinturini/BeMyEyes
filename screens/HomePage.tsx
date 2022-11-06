import { Dimensions } from 'react-native';
import { LogBox, StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

const { width, height} = Dimensions.get("window");

export function HomePage( ) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Logo.svg")}/>
        <Text style={styles.titles}>Your Trips</Text>
        <View>

        </View>
        <Text style={styles.titles}>Latest Trips</Text>
        <View>

        </View>
        <Text style={styles.titles}>Choose a destination</Text>

        <View>
          <MapView provider="google"
          style={styles.map}
          initialRegion={{
            latitude: 10,
            longitude: -2,
            latitudeDelta: 100,
            longitudeDelta: 100,
          }}/>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    backgroundColor: "#EBEBEB",
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-between",
    alignItems: "flex-start",
  },
  titles:{
    padding: 20,
    fontSize: 20,
  },
  map: {
    width: width,
    height: height
  }

});