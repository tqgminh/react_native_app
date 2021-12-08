import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/userInfo/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
const useinfo = [
  {
    id: "1",
    title: "Tên Zalo",
    name: "Bùi Việt Hoàng",
    color: "black",
    info_color: "gray",
    event: () => {
      console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "2",
    title: "User",
    name: "Tạo user name",
    color: "black",
    info_color: "gray",
    event: () => {
      console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "3",
    title: "Giới tính",
    name: "Nam",
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
    name: "+84794112293\n\nSố điện thoại của bạn chỉ hiển thị với\nbạn bè có lưu số trong danh bạ",
    color: "black",
    info_color: "gray",
    event: () => {
      console.warn("Đến trang cá nhân");
    },
  },
];
export default function EditProfileScreen({ navigation, route }) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={{ marginTop: 20, position: "relative" }}>
          <Image
            source={require("../assets/images/dao.jpg")}
            style={{ width: undefined, height: 300 }}
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
              source={{
                uri: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5jKMHm9X0asAX8cFROM&_nc_oc=AQmi3mvMl8BRqSTq1eNVaolZhQGdOEBj9URMPCDq4mcw-XZ8kuKcFJDyWXg7Rur1mnA&_nc_ht=scontent.fhan2-2.fna&oh=00bed594c1a44daec1e02f9e98d3e695&oe=61D2F5FA",
              }}
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
              Bùi Việt Hoàng
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
            ĐỔỈ THÔNG TIN
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
