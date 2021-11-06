import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import FriendsRequestHeader from "../components/invitation/FriendsRequestHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
export default function FriendsRequestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FriendsRequestHeader />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "white",
          height: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "65%",
            flex: 1,
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <View style={{}}>
            <Image
              source={require("../assets/images/dao.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 20, color: "Black", fontWeight: "bold" }}>
              Bui Viet Hoang
            </Text>
            <Text style={{ color: "gray", fontSize: 14, fontWeight: "200" }}>
              Tu so dien thoai
            </Text>
          </View>
        </View>
        <View style={{ width: "35%", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "strech" }}>
            <TouchableOpacity>
              <Button
                style={styles.button}
                onPress={() => navigation.navigate("AcceptFriendRequestScreen")}
              >
                DONG Y
              </Button>
            </TouchableOpacity>
            <MaterialIcons name={"close"} size={25} color="gray" />
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "white" }}>
        <Text style={styles.text}>Hi, Im Hoang, be my friend :)</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultColor,
    // width: "90%",
    borderRadius: 30,
    height: 40,
    color: "white",
    marginLeft: 10,
    textAlign: "center",
  },
  container: {
    height: 150,
    backgroundColor: "white",
  },
  text: {
    fontSize: 14,
    color: defaultColor,
    fontFamily: "Times New Roman",
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});
