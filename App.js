import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./compnents/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNo, setUserNo] = useState();
  const [gussRounds, setGussRounds] = useState(0);

  const newGameHandler = () => {
    setGussRounds(0);
    setUserNo(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNo(selectedNumber);
    setGussRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGussRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGameHandler={startGameHandler} />;

  if (userNo && gussRounds <= 0) {
    content = <GameScreen onGameOver={gameOverHandler} />;
  } else if (gussRounds > 0) {
    content = (
      <GameOver
        roundNumber={gussRounds}
        userNumber={userNumber}
        onRestart={newGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess Number' userChoice={userNo} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
