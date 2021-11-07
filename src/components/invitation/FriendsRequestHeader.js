import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../../styles";

export default function FriendsRequestHeader({ navigation }) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FriendsInvitationScreen")}
        >
          <MaterialIcons
            style={[styles.icon, { marginLeft: 20 }]}
            name="arrow-back"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.text}>Loi moi ket ban</Text>
        <TouchableOpacity>
          <MaterialIcons
            style={[styles.icon, { marginRight: 20 }]}
            name="settings"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColor,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "800",
    marginVertical: 10,
  },
});
