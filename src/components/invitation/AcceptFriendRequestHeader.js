import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function FriendsRequestHeader({ navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FriendsRequestScreen")}
        >
          <MaterialIcons
            style={[styles.icon, { marginLeft: 20 }]}
            name="arrow-back"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Tuy chon ket ban</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#00bfff",
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