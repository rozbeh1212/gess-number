//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

// create a component
const GameOver = () => {
 
  return (
   <View style={styles.container}>
      <Text>The Game is Over</Text>
      <Text>Number of Rounds {props.roundsNumber}</Text>
      <Text>Number was {props.userNumber}</Text> 
      <Button title='new game' onPress={props.onRestart}/>
   </View>
  );
 
}

// define your styles
const styles = StyleSheet.create({

 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 }

});

export default GameOver ;
