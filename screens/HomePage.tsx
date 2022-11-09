import { useRef } from 'react';
import { Dimensions, Settings, StyleSheet, Text, View, Image, Platform, StatusBar, Button } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import Carousel from 'react-native-snap-carousel';
import data from '../shared_functions/carouselData'
import MapView from 'react-native-maps';

const { width, height} = Dimensions.get("window");

/* // {{parallaxProps}: {parallaxProps:any}}
function CarouselItem({item, index}){
  return(
    <View style={styles.carouselItem}>
      <ParallaxImage
      source={{uri: item.sourceImage}}
      containerStyle={styles.container}
      style={styles.image}
      // {...parallaxProps}
      />

      <Text style={styles.titles} numberOfLines={2}>
        {item.title}
      </Text>

      <Text style={styles.titles} numberOfLines={2}>
        {item.date}
      </Text>

      <Image 
      source={{uri:item.sourcePerson}}
      style={styles.profilePic}/>

      <Text style={styles.titles} numberOfLines={2}>
        {item.person}
      </Text>
    </View>
  );
}

function Slider({data}) {
  console.log(data);
  
  const settings ={
    sliderWidth: width,
    sliderHeight: height,
    itemWidth: width,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return(
    <View style={styles.container}>
      <Carousel {...Settings}/>
    </View>
  );
}
 */
export function HomePage( ) {
  return (
    <View style={styles.container}>
      
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

/*   carouselItem:{
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
  }, */

  map: {
    width: width,
    height: height
  }

});