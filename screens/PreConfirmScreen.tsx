import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { LogBox } from 'react-native';


LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

export function PreConfirmScreen({route, navigation}){ 

    const trip1 = route.params.trip
    const destiny = trip1.place

    function JoinedTrip(trip: any){
        navigation.navigate('PosConfirmTrip', {trip: trip,});
    }
    
    return (
        <View style={styles.conteiner}>
            <View style={styles.headingContainer}>
                <View style={{flexDirection: 'row', width: '85%'}}>
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
                <Text style={styles.textTravellingWith}>You're travelling with</Text>
            </View>
            <View style={styles.userInformationContainer}>
            <Image source={{uri: trip1.profileIcon}} style={styles.userImage}/>
                <Text style={styles.textUserName}>@{trip1.traveller}</Text>
            </View>
            <View style={styles.intimacyContainer}>
                <Text style={styles.titleIntimacy}>Intimacy</Text>
                <Text style={styles.textIntimacy}>{'\u2022'} Calls</Text>
                <Text style={styles.textIntimacy}>{'\u2022'} Photos</Text>
                <Text style={styles.textIntimacy}>{'\u2022'} Videos</Text>
            </View>
            <View style={styles.joinButton}>
                <Pressable onPress={() => JoinedTrip(trip1)}>
                   <Text style={styles.buttonText}>Join</Text>
                </Pressable>
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
        // marginTop: '10%',
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
        height: '30%',
    },

    travellingWithContainer: {
        flexDirection: 'row',
        height: '12%',
        alignContent: 'center',       
        
    },

    textTravellingWith: {
        fontSize: 14,
        fontWeight: '400',
        paddingTop: '8%',
    },

    intimacyContainer:{

    },

    titleIntimacy:{
        fontSize: 24,
        fontWeight: '400',
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft:'10%',

    },

    textIntimacy:{
        fontSize: 18,
        fontWeight: '400',
        paddingLeft:'10%',
        
    },

    pinIcon: {
        paddingTop: '7%',
        paddingLeft: 20,
    },
    userInformationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '10%',
    },
    textUserName: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 'auto',
        marginBottom: 'auto',
        // fontFamily: 'Inter',
    },
    userImage: {
        width: 45,
        height: 45,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 10,
    },
    buttonsContainer: {
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    joinButton: {
        backgroundColor: '#1D5F98',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        width: 100,
        height: 50,
        borderRadius: 26,
      },
      
    joinButtonWhite: {
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        width: 200,
        height: 50,
        borderRadius: 26,
        borderStyle: "solid",
        borderWidth: 3,
        borderBottomColor: "white",
        borderTopColor: "white",
        borderRightColor: "white",
        borderLeftColor: "white",
      },

      buttonText: {
        // fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 28,
        color: 'white',
      }


});

