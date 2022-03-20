//import liraries
import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { useEffect } from "react/cjs/react.production.min";
import Card from "../compnents/Card";
import NumberContainer from "../compnents/NumberContainer";

const RandomNo = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return RandomNo(min, max, exclude);
  } else {
    return random;
  }
};

// create a component
const GameScreen = (props) => {
  const [currentGuss, setCurrentGuss] = useState(
    RandomNo(1, 100, props.userChoice)
  );
   
  const [rounds, setRounds] = useState(0)
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {userChoice, onGameOver} = props

  useEffect(() => {
    if (currentGuss === props.userChoice) {
      props.onGameOver(rounds)
    }

  }, [currentGuss, userChoice, onGameOver]
    
    )

  const nextGussHandler = (direction) => {
    if (
      (direction === "lower" && currentGuss < props.userChoice) ||
      (direction === "upper" && currentGuss > props.userChoice)
    ) {
      Alert.alert("Lie", [{ text: "ok", styles: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuss;
    } else {
      currentLow.current = currentGuss;
    }
    const NextNumber = generateRandomGuss(
      currentLow.current,
      currentHigh.current,
      currentGuss
    );
    setCurrentGuss(NextNumber);
    setRounds(curRounds => curRounds + 1)
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guss</Text>
      <NumberContainer>{currentGuss}</NumberContainer>
      <Card style={styles.btnscreen}>
        <Button
          title='Greater'
          onPress={nextGussHandler.bind(this, "greator")}
        />
        <Button title='Lower' onPress={nextGussHandler.bind(this, "lower")} />
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnscreen: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    maxWidth: "80%",
  },
});

export default GameScreen;
