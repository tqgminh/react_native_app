import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../api/config";
import { setToken, setLogin } from "../redux/actions/userAction";
import ApiService from "../api/APIService";
import Search from "../components/Search";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { defaultColor } from "../styles";
import { FILE_URL } from "../api/config";
export default function MeScreen({ navigation }) {
  const { token, phone, username, isLogin, avatar } = useSelector(state => state.userReducer);

  return (
    <View>
      <Search navigation={navigation} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("UserInfoScreen")}>
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
                flex: 1,
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              <View style={{}}>
                <Image
                  source={{uri: FILE_URL + avatar.fileName}}
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
                  {username}
                </Text>
                <Text
                  style={{ color: "gray", fontSize: 14, fontWeight: "200" }}
                >
                  Xem trang cá nhân
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingLeft: 10,
          backgroundColor: "white",
          height: 60,
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <MaterialIcons name={"qr-code"} size={30} color={defaultColor} />
        <Text style={{ marginLeft: 20 }}>QR của tôi</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingLeft: 10,
          backgroundColor: "white",
          height: 80,
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <View style={{}}>
            <MaterialIcons name={"cloud"} size={30} color={defaultColor} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20, color: "#000000", fontWeight: "200" }}>
              Cloud của tôi
            </Text>
            <Text style={{ color: "gray", fontSize: 14, fontWeight: "200" }}>
              Lưu trữ các tin quan trọng
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AccAndSecScreen");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            paddingLeft: 10,
            backgroundColor: "white",
            height: 60,
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <MaterialIcons name={"security"} size={30} color={defaultColor} />
          <Text style={{ marginLeft: 20, fontWeight: "200" }}>
            Tài khoản và bảo mật
          </Text>
          <AntDesign
            name={"right"}
            size={24}
            style={{ position: "absolute", right: 0, marginRight: 20 }}
            color={defaultColor}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: "white",
          height: 60,
          alignItems: "center",
          paddingLeft: 10,
          // justifyContent: "center",
        }}
      >
        <MaterialIcons name={"privacy-tip"} size={30} color={defaultColor} />
        <Text style={{ marginLeft: 20 }}>Quyền riêng tư</Text>
        <AntDesign
          name={"right"}
          size={24}
          style={{ position: "absolute", right: 0, marginRight: 20 }}
          color={defaultColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
});
