import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function UserHeader({ navigation, name }) {
  const goBack = () => {
    navigation.goBack();
  };
  // console.log(name);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <MaterialIcons
          style={[styles.icon, { marginLeft: 20 }]}
          name="arrow-back"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileScreen", { name: name })}
      >
        <MaterialIcons
          style={[styles.icon, { marginRight: 20 }]}
          name="more-horiz"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#00bfff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
