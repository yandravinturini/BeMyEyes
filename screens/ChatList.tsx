// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, StatusBar, Pressable } from 'react-native';


export function ChatList({ navigation }: { navigation: any }) {
    function openChat() {
        navigation.navigate('ChatPage');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titles}>Trips</Text>
            <View style={{width: '100%',}}>
                <Pressable style={{backgroundColor: '#1D5F98', }}><Text>oioi</Text></Pressable>
                <Pressable><Text>oioi</Text></Pressable>
                <Pressable><Text>oioi</Text></Pressable>
            </View>
            <Text style={styles.titles}>Others</Text>
            <View style={{width: '100%',}}>
                <Pressable><Text>oioi</Text></Pressable>
            </View>
            <Button
                title="Mandar mensagem"
                onPress={openChat} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: "#EBEBEB",
        alignItems: 'center',
        justifyContent: 'center',
    },
    titles: {
        fontSize: 24,
    }
});
