import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  BackgroundImage, Pressable
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function CarouselItem({ item }) {
  return (
    <View style={styles.container}>
  
        <Image source={{ uri: item.sourceImage }} style={styles.image} />

        <Image source={require('../assets/images/carouselmask.png')}style={styles.image}/>
      

      <Text style={styles.titles}>{item.title}</Text>

      <Text style={styles.date}>{item.date}</Text>

      <Image source={{ uri: item.sourcePerson }} style={styles.profilePic} />

      <Text style={styles.userName}>{item.person}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 250,
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  titles: {
    position: "absolute",
    bottom: 40,
    left: 40,
    fontSize: 26,
    color: "#EBEBEB"
  },

  date: {
    position: "absolute",
    bottom: 15,
    left: 40,
    fontSize: 18,
    color: "#EBEBEB"
  },

  userName: {
    position: "absolute",
    bottom: 15,
    right: 55,
    fontSize: 12,
    textAlign: "right",
    color: "#EBEBEB",
    
  },

  profilePic: {
    position: "absolute",
    bottom: 35,
    right: 55,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
