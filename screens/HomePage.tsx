import { LogBox, StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';

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
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    backgroundColor: "#EBEBEB",
    flex: 1,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "flex-start",
  },
  titles:{
    fontSize: 20,
  },

});