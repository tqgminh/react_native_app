// import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../styles";

function SuggestFriend({ navigation }) {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => navigation.navigate("SuggestFriendScreen")}
    >
      <View style={styles.view}>
        <MaterialIcons
          style={[styles.icon, { paddingLeft: 10 }]}
          name="contacts"
          size={40}
          color={defaultColor}
        />
        <Text style={styles.text}>Gợi ý bạn bè</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SuggestFriend;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderBottomColor: "#DCDCDC",
  },
  view: {
    width: "100%",
    height: 50,
    flexDirection: "row",

    alignItems: "center",
  },
  icon: {
    // backgroundColor:'blue'
  },
  text: {
    marginHorizontal: 20,
    fontSize: 20,
  },
});
