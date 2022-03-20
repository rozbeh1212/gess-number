//import liraries
import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

// create a component
const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.styles }} />;
};

// define your styles
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
