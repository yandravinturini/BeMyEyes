import React, { useEffect, useRef, memo } from 'react'
import { Animated, StyleSheet, Image } from 'react-native'

const ImageBubble = ({ data }) => {
    const positionAnimated = useRef(new Animated.Value(10)).current
    const opacityAnimated = useRef(new Animated.Value(0)).current

    const Opening = Animated.parallel([
        Animated.timing(
            opacityAnimated,
            {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            positionAnimated,
            {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }
        )
    ])

    useEffect(() => {
        Opening.start()
    }, [])

    return (
        <Animated.View style={{ ...styles.bubble, opacity: opacityAnimated, transform: [{ translateX: positionAnimated }] }}>
            {data.uri && <Image source={{ uri: data.uri }} style={{ width: 150, height: 150 }} />}
        </Animated.View>
    )
}

export default memo(ImageBubble)

const styles = StyleSheet.create({
    bubble: {
        backgroundColor: '#88B83B',
        padding: 16,
        marginLeft: '45%',
        marginTop: 5,
        marginRight: 10,
        maxWidth: '75%',
        alignSelf: 'flex-end',
        borderRadius: 20,
        borderTopRightRadius: 0
    },
    textBubble: {
        fontSize: 16,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#F1F3F3'
    }
})