import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function BackButton({goBack}){
    return(
        <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/icons/arrow_back.png')}
      />
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      
    },
    image: {
      width: 24,
      height: 24,
    },
  });