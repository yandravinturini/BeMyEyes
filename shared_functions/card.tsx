import { useLinkProps } from '../screens/@react-navigation/native';
import { StatusBar } from '../screens/expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Card(props) {    

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
         { props.children } 
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#1D5F98',

  },

  cardContent: {

  },

});
