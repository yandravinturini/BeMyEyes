import * as ImagePicker from 'expo-image-picker';
import { Button, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';



const PickImageGallery = () => {

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    if (hasGalleryPermission == false) {
        return <Text>No access to Internal Storage</Text>
    }


    return (
        // <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => pickImage()} style={{ marginLeft: 'auto', marginRight: 'auto', }}>
            <Ionicons name="camera-outline" style={styles.bottomIcons} />
            {/* {image && <Image source={{ uri: image }} style={{ flex: 1 / 2 }} />} */}

        </TouchableOpacity>
        // </View>
    );
};

export default PickImageGallery;

const styles = StyleSheet.create({
    bottomIcons: {
        fontSize: 35,
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#EBEBEB',
    },
});