import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import userImage1 from '../../../assets/images/chatUser1.png';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export function ChatHeader() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.image}>
                <Image source={userImage1} />
            </View>
            <View style={styles.userNameContainer}>
                <Text style={styles.userName}>John</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <View style={styles.createCircleBorder}>
                        <Ionicons name="call-outline" size={24} style={styles.callIcon} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <View style={styles.createCircleBorder}>
                        <Octicons name="device-camera-video" size={24} style={styles.callIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 20,
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 2,
    },
    image: {
        // borderColor: 'red',
        // borderWidth: 2,
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userNameContainer: {
        justifyContent: 'center',
        width: '53%',
    },
    userName: {
        // borderColor: 'red',
        // borderWidth: 2,
        fontSize: 24,
    },
    iconContainer: {
        // borderColor: 'red',
        // borderWidth: 2,
        width: '11%',
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignContent: 'center',
    },
    createCircleBorder: {
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 2,
        width: 35,
        height: 35,
    },
    callIcon: {
        color: 'white',
        padding: 3,
        justifyContent: 'center',
        alignContent: 'center',
    },
});