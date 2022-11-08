import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Platform, Image } from 'react-native';
import { Card } from '../shared_functions/card'
import { Trip } from '../shared_functions/trip';
import Cairo from '../assets/images/Cairo.png';
import UserImage from '../assets/images/chatUser1.png';
import ChatIcon from '../assets/images/ícones/ChatIconGreen.png';
import GalleryIcon from '../assets/images/ícones/GalleryIconGreen.png';


export function PosConfirmScreen() {

    const trip1 = new Trip("giulia", "isabela", "Cairo", "2022-03-17", "2022-03-25", "passageiro");

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
                <Image source={Cairo} style={{ width: '100%', height: '100%' }}></Image>
            </View>
            <View style={styles.travellingWithContainer}>
                <Ionicons name="pin" size={25} color="#A17C6B" style={styles.pinIcon} />
                <Text style={styles.textTravellingWith}>You're travelling with</Text>
            </View>
            <View style={styles.userInformationContainer}>
                <Image source={UserImage} style={styles.userImage}></Image>
                <Text style={styles.textUserName}>@{trip1.traveller}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Image source={ChatIcon} style={styles.bottomIcons}></Image>
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