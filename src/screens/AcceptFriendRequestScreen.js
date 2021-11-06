import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Switch, TextInput } from "react-native-paper";
import AcceptFriendRequestHeader from "../components/invitation/AcceptFriendRequestHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Toggle from "../components/invitation/Toggle";
import { defaultColor } from "../styles";
export default function FriendsRequestScreen({ navigation }) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <AcceptFriendRequestHeader navigation={navigation} />
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
              Vua ket ban
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, borderTopWidth: 1, marginLeft: 10 }}>
        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={{ marginVertical: 5 }}>Ten goi nho: </Text>
            <TextInput
              placeholder={"Nhap ten goi nho"}
              style={{ height: 50, borderRadius: 5 }}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{}}>Chan nguoi nay xem nhat ki cua toi</Text>
          <Toggle />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              width: "95%",
              height: 40,
              backgroundColor: defaultColor,
              textAlign: "center",
              color: "white",
              fontWeight: "800",
              fontSize: 20,
              borderRadius: 30,
              marginTop: 10,
              padding: 10,
            }}
          >
            XONG
          </Text>
        </TouchableOpacity>
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
