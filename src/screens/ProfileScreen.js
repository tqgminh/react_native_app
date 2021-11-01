import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/userInfo/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
const personal = [
  {
    id: "1",
    icon: "account-circle",
    name: "Tai khoan",
    color: "black",
    event: () => {
      console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "2",
    icon: "history",
    name: "Luu tru",
    color: "black",
    event: () => {
      console.warn("Chặn người này");
    },
  },
  {
    id: "3",
    icon: "local-activity",
    name: "Hoat dong",
    color: "black",
    event: () => {
      console.warn("Xóa cuộc trò chuyện này");
    },
  },
  {
    id: "4",
    icon: "privacy-tip",
    name: "Quyen rieng tu",
    color: "black",
    event: () => {
      console.warn("Xóa cuộc trò chuyện này");
    },
  },
  {
    id: "5",
    icon: "support",
    name: "Ho tro",
    color: "black",
    event: () => {
      console.warn("Xóa cuộc trò chuyện này");
    },
  },
];
const generalsetting = [
  {
    id: "1",
    icon: "settings",
    name: "Cai dat",
    color: "black",
    event: () => {
      console.log("");
    },
  },
  {
    id: "2",
    icon: "perm-identity",
    name: "Chinh sua thong tin ca nhan",
    color: "black",
    event: () => {
      console.log("");
    },
  },
  {
    id: "3",
    icon: "report",
    name: "Phan hoi",
    color: "black",
    event: () => {
      console.log("");
    },
  },
  {
    id: "4",
    icon: "logout",
    name: "Thoat dang nhap",
    color: "red",
    event: () => {
      console.log("");
    },
  },
];
export default function ProfileScreen({ navigation, route }) {
  const { name } = route.params;
  console.log(name);
  return (
    <ScrollView>
      <View>
        <ProfileHeader navigation={navigation} name={name} />
      </View>
      <Text style={styles.text}>Ca Nhan</Text>
      <FlatList
        style={{ width: "100%" }}
        data={personal}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={item.event}>
              <View
                style={{ flexDirection: "row", height: 50, marginLeft: 10 }}
              >
                <MaterialIcons
                  style={[{ margin: 12 }]}
                  name={item.icon}
                  size={25}
                  color={item.color}
                />
                <Text style={{ fontSize: 20, color: item.color, margin: 10 }}>
                  {item.name}
                </Text>
              </View>
              <Divider style={{ borderBottomColor: "#00bfff" }} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.text}>Cai dat chung</Text>
      <FlatList
        style={{ width: "100%" }}
        data={generalsetting}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={item.event}>
              <View
                style={{ flexDirection: "row", height: 50, marginLeft: 10 }}
              >
                <MaterialIcons
                  style={[{ margin: 12 }]}
                  name={item.icon}
                  size={25}
                  color={item.color}
                />
                <Text style={{ fontSize: 20, color: item.color, margin: 10 }}>
                  {item.name}
                </Text>
              </View>
              <Divider style={{ borderBottomColor: "#00bfff" }} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#00bfff",
    marginVertical: 20,
    fontSize: 20,
    marginLeft: 10,
    fontFamily: "Helvetica",
    fontWeight: "800",
  },
});
