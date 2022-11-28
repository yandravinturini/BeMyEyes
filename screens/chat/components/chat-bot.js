import React, { useEffect, useState, Fragment } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BubblesFactory from './bubbles-factory'
import UserBubble from './user-bubble'
import data from '../json/chat-bot.json'
import ChatBubble from './chat-bubble'

const ChatBot = () => {
    const [components, setComponents] = useState([])

    const [componentsUser, setComponentsUser] = useState([])

    useEffect(() => {
        if (data) {
            setComponents([
                // eslint-disable-next-line react/jsx-key
                <BubblesFactory data={data?.chatBot.messages} bubble={<ChatBubble/>} interval={3000}/>
            ])
            setComponentsUser([
                <BubblesFactory data={data?.chatBot.messages} bubble={<UserBubble/>}/>
            ])
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {componentsUser.map((component, index) => {
                    return (
                        <Fragment key={index}>
                            { component }
                        </Fragment>
                    )
                })}
                {components.map((component, index) => {
                    return (
                        <Fragment key={index}>
                            { component }
                        </Fragment>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChatBot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB'
    },
    scrollViewContainer: {
        paddingBottom: 120
    }
})