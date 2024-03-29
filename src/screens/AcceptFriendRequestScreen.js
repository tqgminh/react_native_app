import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Switch, TextInput } from "react-native-paper";
import AcceptFriendRequestHeader from "../components/invitation/AcceptFriendRequestHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Toggle from "../components/invitation/Toggle";
import { defaultColor } from "../styles";
import { FILE_URL } from "../api/config";


export default function FriendsRequestScreen({ navigation, route }) {
  let item = route.params.item;
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
              source={{ uri: FILE_URL + item.avatar.fileName }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
              {item.username}
            </Text>
            <Text style={{ color: "gray", fontSize: 14, fontWeight: "200" }}>
              Vừa kết bạn
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, borderTopWidth: 1, marginLeft: 10 }}>
        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={{ marginVertical: 5, color: "#1a1a1a" }}>
              Tên gợi nhớ:{" "}
            </Text>
            <TextInput
              placeholder={"Nhập tên gợi nhớ"}
              style={{ height: 50, borderRadius: 5, color: "#323533" }}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#1a1a1a" }}>
            Chặn người này xem nhật kí của tôi
          </Text>
          <Toggle style={{ marginTop: 30 }} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("FriendsRequestScreen")}
        >
          <Text
            style={{
              width: "95%",
              height: 50,
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
