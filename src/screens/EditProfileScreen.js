import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/userInfo/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { FILE_URL } from "../api/config";


export default function EditProfileScreen({ navigation, route }) {
  const { token, phone, username, isLogin, avatar, coverImage, gender } = useSelector(state => state.userReducer);

  const useinfo = [
    {
      id: "1",
      title: "Tên Zalo",
      name: username,
      color: "black",
      info_color: "gray",
      event: () => {
        console.warn("Đến trang cá nhân");
      },
    },
    {
      id: "2",
      title: "User",
      name: username,
      color: "black",
      info_color: "gray",
      event: () => {
        console.warn("Đến trang cá nhân");
      },
    },
    {
      id: "3",
      title: "Giới tính",
      name: gender,
      color: "black",
      info_color: "gray",
      event: () => {
        console.warn("Đến trang cá nhân");
      },
    },
    {
      id: "4",
      title: "Ngày sinh",
      name: "12/06/2000",
      color: "black",
      info_color: "gray",
      event: () => {
        console.warn("Đến trang cá nhân");
      },
    },
    {
      id: "5",
      title: "Điện thoại",
      name: phone + "\n\nSố điện thoại của bạn chỉ hiển thị với\nbạn bè có lưu số trong danh bạ",
      color: "black",
      info_color: "gray",
      event: () => {
        console.warn("Đến trang cá nhân");
      },
    },
  ];

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={{marginTop: 25, position: "relative" }}>
          <Image
            source={{uri: FILE_URL + coverImage.fileName}}
            style={{ width: undefined, height: 200 }}
          ></Image>
          <View style={{ position: "absolute", top: 10 }}>
            <TouchableOpacity onPress={goBack}>
              <MaterialIcons
                style={{ marginLeft: 20 }}
                name="arrow-back"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              flexDirection: "row",
              bottom: 10,
              left: 15,
            }}
          >
            <Image
              source={{uri: FILE_URL + avatar.fileName}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                overflow: "hidden",
              }}
            ></Image>
            <Text
              style={{
                marginLeft: 15,
                color: "white",
                fontSize: 20,
                textAlignVertical: "center",
              }}
            >
              {username}
            </Text>
          </View>
        </View>
        <FlatList
          style={{ width: "100%", height: 300, backgroundColor: "white" }}
          data={useinfo}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: item.color,
                    margin: 10,
                    width: "20%",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 16, color: item.info_color, margin: 10 }}
                >
                  {item.name}
                </Text>
                <Divider style={{ borderBottomWidth: 2 }} />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <View
          style={{
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              textAlignVertical: "center",
              borderRadius: 30,
              width: 200,
              height: 40,
              backgroundColor: defaultColor,
            }}
            onPress={() => {
              navigation.navigate("ChangeInfoScreen");
            }}
          >
            ĐỔI THÔNG TIN
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: defaultColor,
  },
  text: {
    color: defaultColor,
    marginVertical: 20,
    fontSize: 24,
    fontWeight: "800",
    marginLeft: 20,
  },
});
