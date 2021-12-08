import React, { useState } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  Image,
  Button,
  CheckBox,
  RadioButton,
  TouchableWithoutFeedback,
} from "react-native";
import { useRoute } from "@react-navigation/core";
import { Divider, TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/userInfo/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
const personal = [
  {
    id: "1",
    title: "Tên Zalo",
    name: "Bùi Việt Hoàng",
    color: "black",
    info_color: "gray",
    event: () => {
      // console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "2",
    title: "User",
    name: "Tạo user name",
    color: "black",
    info_color: "gray",
    event: () => {
      // console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "3",
    title: "Giới tính",
    name: "Nam",
    color: "black",
    info_color: "gray",
    event: () => {
      // console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "4",
    title: "Ngày sinh",
    name: "12/06/2000",
    color: "black",
    info_color: "gray",
    event: () => {
      // console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "5",
    title: "Điện thoại",
    name: "+84794112293\n\nSố điện thoại của bạn chỉ hiển thị với\nbạn bè có lưu số trong danh bạ",
    color: "black",
    info_color: "gray",
    event: () => {
      // console.warn("Đến trang cá nhân");
    },
  },
];
export default function ChangeInfoScreen({ navigation, route }) {
  const goBack = () => {
    navigation.goBack();
  };
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <View>
          <ProfileHeader navigation={navigation} name={"Chỉnh sửa thông tin"} />
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "white" }}>
          <View
            style={{
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/nguoi.jpeg")}
              style={{ width: 70, borderRadius: 50, height: 70 }}
            />
          </View>
          <View style={{ width: "75%" }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TextInput
                placeholder="Bùi Việt Hoàng"
                style={{ backgroundColor: "white", height: 50, width: "90%" }}
              ></TextInput>
              <MaterialIcons
                style={{ marginTop: 15 }}
                name="edit"
                size={25}
                color="gray"
              ></MaterialIcons>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="Nam"
                style={{ backgroundColor: "white", height: 50, width: "90%" }}
              ></TextInput>
              <MaterialIcons
                style={{ alignItems: "flex-end", marginTop: 15 }}
                name="edit"
                size={25}
                color="gray"
              ></MaterialIcons>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="12/06/2000"
                style={{ backgroundColor: "white", height: 50, width: "90%" }}
              ></TextInput>
              <MaterialIcons
                style={{ alignItems: "flex-end", marginTop: 15 }}
                name="edit"
                size={25}
                color="gray"
              ></MaterialIcons>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <TextInput
            placeholder="Username"
            style={{ backgroundColor: "white", height: 50 }}
          ></TextInput>
          <View style={{ alignItems: "center", marginTop: 10, width: "100%" }}>
            <Text
              style={{
                backgroundColor: defaultColor,
                width: "60%",
                height: 40,
                borderRadius: 30,
                color: "white",
                textAlignVertical: "center",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
              onPress={() => navigation.navigate("EditProfileScreen")}
            >
              CẬP NHẬT
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultColor,
  },
  text: {
    color: defaultColor,
    marginVertical: 20,
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 20,
  },
});
