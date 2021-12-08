import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../../styles";

export default function ProfileHeader({ navigation, name }) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <MaterialIcons
          style={[styles.icon, { marginLeft: 20 }]}
          name="arrow-back"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: defaultColor,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginTop: 40,
    marginHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 40,
  },
});
