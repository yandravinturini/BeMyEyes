import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Pressable, Platform, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';

export function FoundTrips(this: any){    
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    flex: 1,
    paddingTop: Platform.OS === 'android'? /* StatusBar.currentHeight */ 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
