// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, StatusBar, Pressable, Image } from 'react-native';
import userImage1 from '../../assets/images/chatUser1.png';
import userImage2 from '../../assets/images/chatUser2.png';
import userImage3 from '../../assets/images/chatUser3.png';
import userImage4 from '../../assets/images/chatUser4.png';

export function ChatList({ navigation }: { navigation: any }) {
    function openChat() {
        navigation.navigate('ChatPage');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titles}>Trips</Text>
            <View style={{ width: '100%', borderBottomWidth: 2, borderBottomColor: 'white' }}>
                <Pressable style={styles.card} onPress={openChat}>
                    <View style={styles.image}>
                        <Image source={userImage1} />
                    </View>
                    <View style={styles.name}>
                        <Text style={{ fontSize: 18, }}>@John</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={{ fontSize: 18, color: '#A17C6B' }}>Cairo</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.card} onPress={openChat}>
                    <View style={styles.image}>
                        <Image source={userImage2} />
                    </View>
                    <View style={styles.name}>
                        <Text style={{ fontSize: 18, }}>@Madeleine</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={{ fontSize: 18, color: '#A17C6B' }}>Hawaii</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.card} onPress={openChat}>
                    <View style={styles.image}>
                        <Image source={userImage3} />
                    </View>
                    <View style={styles.name}>
                        <Text style={{ fontSize: 18, }}>@Mario</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={{ fontSize: 18, color: '#A17C6B' }}>Berlin</Text>
                    </View>
                </Pressable>
                {/* <Pressable style={styles.card} onPress={openChat}><Text>Oioi</Text></Pressable>
                <Pressable style={styles.card} onPress={openChat}><Text>oiOi</Text></Pressable> */}
            </View>
            <Text style={styles.titles}>Others</Text>
            <View style={{ width: '100%', borderBottomWidth: 2, borderBottomColor: 'white'}}>
                <Pressable style={styles.card} onPress={openChat}>
                    <View style={styles.image}>
                        <Image source={userImage4} />
                    </View>
                    <View style={styles.name}>
                        <Text style={{ fontSize: 18, }}>@Carla</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={{ fontSize: 18, color: '#A17C6B' }}>Beijing</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: "#EBEBEB",
    },
    titles: {
        fontSize: 20,
        paddingVertical: 20,
        paddingLeft: 30,
    },
    card: {
        backgroundColor: '#EBEBEB',
        height: 72,
        borderColor: 'white',
        borderTopWidth: 2,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    image: {
        // borderRightColor: 'red',
        // borderRightWidth: 2,
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        fontSize: 18,
    },
    location: {
        width: '25%',
        height: '100%',
        // borderLeftColor: 'red',
        // borderLeftWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
