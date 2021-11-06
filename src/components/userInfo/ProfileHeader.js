import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../../styles";

export default function ProfileHeader({ navigation, name }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("UserInfoScreen")}>
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
    height: 50,
    backgroundColor: defaultColor,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 15,
  },
});
