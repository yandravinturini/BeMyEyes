import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Trip } from '../shared_functions/trip';
import ChatIcon from '../assets/images/ícones/ChatIconGreen.png';
import GalleryIcon from '../assets/images/ícones/GalleryIconGreen.png';
import React, { useEffect, useState} from "react";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

export function PosConfirmScreen({route, navigation}) {

    //const trip1 = new Trip("Dan", "Ellon", "Porto", "2022-05-20", "2022-05-24", "passageiro", "https://images.unsplash.com/photo-1569959220744-ff553533f492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80", "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80");
    const trip1 = route.params.trip
    const date = new Date();
    var currentDate = date.toString();
    var end = trip1.endDate;
    var end2 = end.toString();
    const [past, setPast] = useState(0)

    const checkDate = () => {
        if(currentDate > end2){
            return 1;
        }
        return 0;
    }

    function goToChat() {
        navigation.navigate('ChatPage');
    }

    return (
        <View style={styles.conteiner}>
            <View style={styles.headingContainer}>
                <View style={{ flexDirection: 'row', width: '85%' }}>
                    <View style={styles.headingDestiny}>
                        <Text style={styles.textDestiny}>{trip1.place}</Text>
                    </View>

                    <View style={styles.headingDates}>
                        <Text style={styles.textDate}> {(trip1.startDate).toDateString()}</Text>
                    </View>

                </View>

                <View style={styles.headingButton}>
                    <Ionicons name="ellipsis-horizontal" style={styles.moreOptionsICon} />
                </View>

            </View>
            <View style={styles.coverImageContainer}>
                <Image source={{uri: trip1.imageIcon}} style={{ width: '100%', height: '100%' }}/>
            </View>
            <View style={styles.travellingWithContainer}>
                <Ionicons name="pin" size={25} color="#A17C6B" style={styles.pinIcon} />
                {checkDate()? <Text style={styles.textTravellingWith}>You've travelled with</Text> : <Text style={styles.textTravellingWith}>You're travelling with</Text>}
            </View>
            <View style={styles.userInformationContainer}>
                <Image source={{uri: trip1.profileIcon}} style={styles.userImage}/>
                <Text style={styles.textUserName}>@{trip1.traveller}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable onPress={goToChat}>
                    <Image source={ChatIcon} style={styles.bottomIcons}></Image>
                </Pressable>
                <Image source={GalleryIcon} style={styles.bottomIcons}></Image>
            </View>

        </View>

    )
};


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EBEBEB',
    },
    headingContainer: {
        flexDirection: 'row',
        height: '10%',
        marginTop: '10%',
    },

    headingDestiny: {
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    headingDates: {
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 3,
    },

    headingButton: {
        width: '15%',
    },
    textDestiny: {
        fontSize: 24,
        fontWeight: '400',
        // fontFamily: 'Inter',
    },
    textDate: {
        fontSize: 14,
        fontWeight: '400',
        paddingTop: 7,
        paddingLeft: 5,
    },
    moreOptionsICon: {
        fontSize: 35,
        color: "#1D5F98",
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    coverImageContainer: {
        // backgroundColor: "gray",
        height: '40%',
    },

    travellingWithContainer: {
        flexDirection: 'row',
        height: '10%',
        alignContent: 'center',
    },

    textTravellingWith: {
        fontSize: 14,
        fontWeight: '400',
        paddingTop: '7%',
    },
    pinIcon: {
        paddingTop: '7%',
        paddingLeft: 20,
    },
    userInformationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '17%',
    },
    textUserName: {
        fontSize: 24,
        fontWeight: '400',
        marginTop: 'auto',
        marginBottom: 'auto',
        // fontFamily: 'Inter',
    },
    userImage: {
        borderRadius: 50,
        width: 65,
        height: 65,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 30,
    },
    buttonsContainer: {
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    bottomIcons: {
        fontSize: 65,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 30,
        marginLeft: 30,
    }


});