import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../../styles";

export default function UserHeader({ navigation}) {
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
        onPress={() => navigation.navigate("ProfileScreen")}
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
    height: 80,
    backgroundColor: defaultColor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 40,
    marginHorizontal: 10,
  },
});
