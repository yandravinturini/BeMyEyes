import { StyleSheet, Text, View, Button, ScrollView, Platform } from 'react-native';
import {Trip} from '../shared_functions/trip';



export function PreConfirmScreen(){ 

    const trip1 = new Trip("giulia", "isabela","Rio de Janeiro", "2022-03-17", "2022-03-25", "passageiro")

    return (
    <View style={styles.conteiner}>
        <View style={styles.heading}>
            <View style={styles.destiny}>
                <Text>{trip1.place}</Text>
            </View>
            <View style={styles.dates}>
                <Text>3rd May - 10th May</Text>
            </View>
            <View style={styles.button}>
                <Text>Button</Text>
            </View>            
        </View>

        <View style={styles.coverImage}>
            <Text> </Text>
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
        backgroundColor: '828282',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '2%',
        borderColor: "black",
        borderWidth: 5,
  
    },
  
    destiny: {
      marginBottom: 5,
      padding: 5,
      borderColor: "green",
      borderWidth: 5,
      
    },

    dates: {
        marginBottom: 5,
        flex: 1,
        flexDirection: "column",
        justifyContents: 'center',
        padding: 5,
        borderColor: "green",
        borderWidth: 5,
    },

    button: {
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#1D5F98',
        borderColor: "green",
        borderWidth: 5,
    },
    coverImage:{
        backgroundColor: "gray",
        height: '30%',
        width: '100%',
        borderColor: "pink",
        borderWidth: 5,
    },

    travellingWith: {
        flex: 1,
        flexDirection: "column",
        height: '5%',
        alignSelf: 'center',
        borderColor: "black",
        borderWidth: 5,
    },

    partner: {
        flex: 1,
        flexDirection: "column",
        height: '15%',
        alignSelf: 'center',
        borderColor: "pink",
        borderWidth: 5,
    },

    intimacy: {
        flex: 1,
        flexDirection: "column",
        height: '25%',
        alignSelf: 'center',
        borderColor: "black",
        borderWidth: 5,
    },

    buttonDois: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#1D5F98', 
        height: '10%',
        width: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "pink",
        borderWidth: 5,
    },

    
  
  });
  
