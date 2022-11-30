// import {  } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import userImage1 from '../../assets/images/chatUser1.png';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import ChatBot from './components/chat-bot';
import { AntDesign } from '@expo/vector-icons';
import { Fragment, useEffect, useState, useLayoutEffect } from 'react';
import { ChatHeader } from './components/chat-header';
import PickImageGallery from './components/pick-image-gallery';
import * as ImagePicker from 'expo-image-picker';
import BubblesFactory from './components/bubbles-factory'
import UserBubble from './components/user-bubble'
import ImageBubble from './components/image-bubble'
import data from './json/chat-bot.json'
import ChatBubble from './components/chat-bubble'


export function ChatPage() {


  //chat bot
  const [components, setComponents] = useState([])
  const [componentsUser, setComponentsUser] = useState([])
  const [componentImage, setComponentImage] = useState([])


  useEffect(() => {
    if (data) {
      setComponents([
        // eslint-disable-next-line react/jsx-key
        <BubblesFactory data={data?.chatBot.messages} bubble={<ChatBubble />} interval={3000} />
      ])
      setComponentsUser([
        <BubblesFactory data={data?.user.messages} bubble={<UserBubble />} />
      ])
      setComponentImage([
        <BubblesFactory data={data?.imagesUpload.messages} bubble={<ImageBubble />} />
      ])
    }
  }, [])

  //image picker
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
      setImage(result.uri)
    }
  }


  const [componentImageUploaded, setComponentImageUploaded] = useState([])
  const imageArray = [
    {
      "uri": image
    },
  ]
  useLayoutEffect(() => {
    if (image) {
      setComponentImageUploaded([
        <BubblesFactory data={imageArray} bubble={<ImageBubble />} />
      ])
    }
    console.log('fora', image)
  }, [])


  const [componentNewMessage, setComponentNewMessage] = useState([])
  const [fromInput, setFromInput] = useState('')


  const saveInput = () => {
    const inputArray = []
    const inputArray2 =  {
      "text": fromInput
    }
    inputArray.push(inputArray2)
  
    console.log(inputArray)
    
    if (fromInput) {
      // console.log('dentro', fromInput)
      setComponentNewMessage([
        <BubblesFactory data={inputArray} bubble={<UserBubble />} />
      ])
    }
    // console.log('fora', fromInput)
  }


  if (hasGalleryPermission == false) {
    return <Text>No access to Internal Storage</Text>
  }


  //display
  return (
    <View style={styles.container}>
      <ChatHeader />
      <View style={{ height: '87%' }}>
        <View style={{ height: '85%', width: '97%', marginRight: 'auto', marginLeft: 'auto' }}>
          {/* <ChatBot /> */}
          <SafeAreaView style={styles.containerBot}>
            <ScrollView>
              {componentsUser.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {components.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {/* {componentImage.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })} */}
              {componentImageUploaded.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage.map((component, index) => 
              {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}

              {/* {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />} */}

            </ScrollView>
          </SafeAreaView>
        </View>
        <View style={{ height: '15%', justifyContent: 'center', }}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => pickImage()} style={{ marginLeft: 'auto', marginRight: 'auto', }}>
              <Ionicons name="camera-outline" style={styles.bottomIcons} />
            </TouchableOpacity>
            {/* <PickImageGallery/> */}
            <TextInput style={styles.textInput}
             onChangeText={(newMessage) => setFromInput(newMessage)}
            // value={newMessage} onChangeText={setNewMessage}
            />
            <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 'auto', }} onPress={saveInput}>
              <AntDesign name="arrowright" style={styles.bottomIcons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    // borderColor: 'red',
    // borderWidth: 2,
  },
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
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '93%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 12,

  },
  bottomIcons: {
    fontSize: 35,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#EBEBEB',
  },
  textInput: {
    // borderColor: 'red', 
    // borderWidth: 2,
    fontSize: 17,
    width: '70%',
    height: 42,
  },
  containerBot: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  },
});
