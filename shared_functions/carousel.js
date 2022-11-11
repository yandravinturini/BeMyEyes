import { StyleSheet,View,FlatList,} from "react-native";
import data from "../shared_functions/carouselData";
import CarouselItem from "../shared_functions/carouselItem";

export default function Carousel() {
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CarouselItem item={item} />}
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
