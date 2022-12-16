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
import React, { useRef } from 'react';


export function ChatPage() {


  //chat bot
  const [components, setComponents] = useState([])
  const [componentsUser, setComponentsUser] = useState([])
  // const [componentImage, setComponentImage] = useState([])
  const [count, setCount] = useState(1);
  const [componentNewMessage, setComponentNewMessage] = useState([])
  const [componentNewMessage1, setComponentNewMessage1] = useState([])
  const [componentNewMessage2, setComponentNewMessage2] = useState([])
  const [componentNewMessage3, setComponentNewMessage3] = useState([])
  const [componentNewMessage4, setComponentNewMessage4] = useState([])
  const [componentNewMessage5, setComponentNewMessage5] = useState([])
  const [componentNewMessage6, setComponentNewMessage6] = useState([])
  const [componentNewMessage7, setComponentNewMessage7] = useState([])
  const [componentNewMessage8, setComponentNewMessage8] = useState([])
  const [componentNewMessage9, setComponentNewMessage9] = useState([])
  const [fromInput, setFromInput] = useState('')
  //image picker
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [componentImageUploaded, setComponentImageUploaded] = useState([])

  const scrollViewRef = useRef();


  useEffect(() => {
    if (data) {
      setComponents([
        // eslint-disable-next-line react/jsx-key
        <BubblesFactory data={data?.chatBot.messages} bubble={<ChatBubble />} interval={3000} />
      ])
      setComponentsUser([
        <BubblesFactory data={data?.user.messages} bubble={<UserBubble />} />
      ])
      // setComponentImage([
      //   <BubblesFactory data={data?.imagesUpload.messages} bubble={<ImageBubble />} />
      // ])
    }
  }, [])




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
  }, [])



  function saveInput() {
    console.log(count)
    const inputArray = []
    const inputArray2 = {
      "text": fromInput
    }
    inputArray.push(inputArray2)

    switch (count) {
      case 1:
        console.log('case 1')
        if (fromInput) {
          setComponentNewMessage([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 2:
        console.log('case 2')
        if (fromInput) {
          setComponentNewMessage1([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 3:
        if (fromInput) {
          setComponentNewMessage2([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 4:
        if (fromInput) {
          setComponentNewMessage3([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 5:
        if (fromInput) {
          setComponentNewMessage4([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 6:
        if (fromInput) {
          setComponentNewMessage5([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 7:
        if (fromInput) {
          setComponentNewMessage6([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 8:
        if (fromInput) {
          setComponentNewMessage7([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 9:
        if (fromInput) {
          setComponentNewMessage8([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
      case 10:
        if (fromInput) {
          setComponentNewMessage9([
            <BubblesFactory data={inputArray} bubble={<UserBubble />} />
          ])
        }
        break
    }
    setCount(count + 1)
    setFromInput('')
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
            <ScrollView ref={scrollViewRef}
              onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
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
              {componentImageUploaded.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage1.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage2.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage3.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage4.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage5.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage6.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage7.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage8.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
              {componentNewMessage9.map((component, index) => {
                return (
                  <Fragment key={index}>
                    {component}
                  </Fragment>
                )
              })}
            </ScrollView>
          </SafeAreaView>
        </View>
        <View style={{ height: '15%', justifyContent: 'center', }}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => pickImage()} style={{ marginLeft: 'auto', marginRight: 'auto', }}>
              <Ionicons name="camera-outline" style={styles.camera} />
            </TouchableOpacity>
            {/* <PickImageGallery/> */}
            <TextInput style={styles.textInput}
              onChangeText={(newMessage) => setFromInput(newMessage)} placeholder=""
              value={fromInput}
            />
            <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 'auto', }} onPress={saveInput}>
              {fromInput ? <AntDesign name="arrowright" style={styles.bottomIconsGreen} /> : <AntDesign name="arrowright" style={styles.bottomIcons} />}
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
  camera: {
    fontSize: 35,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#1D5F98',
  },
  bottomIconsGreen: {
    fontSize: 35,
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#88B83B',
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
