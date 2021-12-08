import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/core";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../components/userInfo/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
const personal = [
  {
    id: "1",
    icon: "account-circle",
    name: "Tài khoản",
    color: "black",
    event: () => {
      console.warn("Đến trang cá nhân");
    },
  },
  {
    id: "2",
    icon: "history",
    name: "Lưu trữ",
    color: "black",
    event: () => {
      console.warn("Chặn người này");
    },
  },
  {
    id: "3",
    icon: "local-activity",
    name: "Hoạt động",
    color: "black",
    event: () => {
      console.warn("Xóa cuộc trò chuyện này");
    },
  },
  {
    id: "4",
    icon: "report",
    name: "Phản hồi",
    color: "black",
    event: () => {
      console.log("");
    },
    screen: "AccAndSecScreen",
  },
  {
    id: "5",
    icon: "support",
    name: "Hỗ trợ",
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
    name: "Cài đặt",
    color: "black",
    event: () => {
      console.log("");
    },
  },
  {
    id: "2",
    icon: "perm-identity",
    name: "Chỉnh sửa thông tin cá nhân",
    color: "black",
    event: () => {
      console.log("");
    },
    screen: "EditProfileScreen",
  },
  {
    id: "3",
    icon: "privacy-tip",
    name: "Quyền riêng tư",
    color: "black",
    event: () => {
      console.warn("Xóa cuộc trò chuyện này");
    },
  },
  {
    id: "4",
    icon: "logout",
    name: "Thoát đăng nhập",
    color: "red",
    event: (navigation) => {
      console.log("");
    },
    screen: "AccAndSecScreen",
  },
];
export default function ProfileScreen({ navigation, route }) {
  const { name } = route.params;
  // console.log(name);
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <View>
          <ProfileHeader navigation={navigation} name={name} />
        </View>
        <Text style={styles.text}>Cá nhân</Text>
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
                <Divider style={{ borderBottomColor: defaultColor }} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.text}>Cài đặt chung</Text>
        <FlatList
          style={{ width: "100%" }}
          data={generalsetting}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
              >
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
                <Divider style={{ borderBottomColor: defaultColor }} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
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
