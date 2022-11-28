import { StyleSheet,View,FlatList, Pressable, TouchableOpacity,} from "react-native";
import data from "../shared_functions/carouselData";
import CarouselItem from "../shared_functions/carouselItem";

export default function Carousel({ navigation }) {

  function DetailsPage(trip: Trip){
    navigation.navigate('PreConfirmTrip', {trip: trip,});
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) =>  
        <TouchableOpacity onPress={() => DetailsPage(item.trip)}>
          <CarouselItem item={item} ></CarouselItem>
          </TouchableOpacity> }
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
});
