import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageElement(props) {
  return <Image source={props.imgsource} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
});
