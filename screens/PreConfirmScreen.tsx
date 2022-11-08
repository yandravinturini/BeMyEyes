import { StyleSheet, Text, View, Button, ScrollView, Platform } from 'react-native';
import {Trip} from '../shared_functions/trip';



export function PreConfirmScreen(){ 

    const trip1 = new Trip("giulia", "isabela","Rio de Janeiro", "2022-03-17", "2022-03-25", "passageiro")

    return (
    <View style={styles.conteiner}>
    <ScrollView>
        <View style={styles.heading}>

            <View style={styles.destiny}>
                <Text style={styles.textDestiny}>{trip1.place}</Text>
            </View>

            <View style={styles.dates}>
                <Text style={styles.textDate}> {(trip1.startDate).toDateString()}</Text>
            </View>

            <View style={styles.button}>
                <Text>Button</Text>
            </View>        

        </View>

        <View style={styles.coverImage}>
            <Text>Image</Text>
        </View>

        <View style={styles.travellingWith}>
            <Text>Oi</Text>
        </View>
        
        <View style={styles.partner}>
            <Text>Oi</Text>
        </View>
        
        <View style={styles.intimacy}>
            <Text>Oi</Text>
        </View>
        
        <View style={styles.buttonDois}>
            <Text>Oi</Text>
        </View>

    </ScrollView>
    </View>
)
};

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'stretch',
        borderColor: "red",
        borderWidth: 5,

    },
 
    heading: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: "purple",
        // borderWidth: 5,
  
    },
  
    destiny: {
      padding: 5,
    //   borderColor: "green",
    //   borderWidth: 10,
      marginRight:'auto',
      
    },

    dates: {
        marginBottom: 5,
        // borderColor: "green",
        // borderWidth: 5,
    },

    button: {
        backgroundColor: '#1D5F98',
        // borderColor: "green",
        // borderWidth: 5,
        borderRadius: 5,
        paddingHorizontal: 20,

    },
    coverImage:{
        backgroundColor: "gray",
        height: 300,
        borderColor: "pink",
        borderWidth: 5,
    },

    travellingWith: {
        // flex: 1,
        // flexDirection: "column",
        // height: '10%',
        // alignSelf: 'center',
        borderColor: "black",
        borderWidth: 5,
    },

    partner: {
        // flex: 1,
        // flexDirection: "column",
        // height: '15%',
        // alignSelf: 'center',
        borderColor: "pink",
        borderWidth: 5,
    },

    intimacy: {
        // flex: 1,
        // flexDirection: "column",
        height: '25%',
        // alignSelf: 'center',
        borderColor: "black",
        borderWidth: 5,
    },

    buttonDois: {
        // flex: 1,
        // flexDirection: "column",
        backgroundColor: '#1D5F98', 
        // height: '10%',
        // width: '40%',
        // alignSelf: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderColor: "yellow",
        borderWidth: 5,
    },

    textDestiny: {
        fontSize: 20, 
    },

    textDate: {
        fontSize: 16, 
    },
    
  
  });