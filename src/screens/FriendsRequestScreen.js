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
      <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <FriendsRequestHeader navigation={navigation} />
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
              <Text
                style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
              >
                Bùi Việt Hoàng
              </Text>
              <Text style={{ color: "gray", fontSize: 14, fontWeight: "200" }}>
                Từ số điện thoại
              </Text>
            </View>
          </View>
          <View style={{ width: "35%", marginTop: 5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("AcceptFriendRequestScreen")
                  }
                >
                  ĐỒNG Ý
                </Text>
              </TouchableOpacity>
              <MaterialIcons name={"close"} size={25} color="gray" />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginBottom: 20 }}>
          <Text style={styles.text}>
            Xin chào. Tôi là Hoàng, kết bạn với tôi nhé!
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultColor,
    fontWeight: "bold",
    borderRadius: 30,
    height: 40,
    color: "white",
    marginLeft: 10,
    textAlign: "center",
    textAlignVertical: "center",
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: defaultColor,
  },
  text: {
    fontSize: 14,
    color: defaultColor,
    paddingLeft: 30,
    paddingRight: 30,
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});
