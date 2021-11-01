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
import { MaterialIcons } from "@expo/vector-icons";
export default function MeScreen({ navigation }) {
  const { token } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const deleteToken = (new_token) => dispatch(setToken(new_token));
  const deleteLogin = (isLogin) => dispatch(setLogin(isLogin));

  const onLogoutPressed = () => {
    postToLoginAPI(navigation);
  };

  const postToLoginAPI = (navigation) => {
    ApiService.post(API_URL + "/users/logout", {
      token: token,
    })
      .then(function (response) {
        // handle success
        deleteToken("");
        deleteLogin("false");
        navigation.reset({
          index: 0,
          routes: [{ name: "StartScreen" }],
        });
      })
      .catch(function (error) {
        // handle error
        // do chưa có api logout để tạm như này
        deleteToken("");
        deleteLogin("false");
        navigation.reset({
          index: 0,
          routes: [{ name: "StartScreen" }],
        });
        return;

        setErr("Có lỗi xảy ra!");
      });
  };

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
                  style={{ fontSize: 20, color: "Black", fontWeight: "bold" }}
                >
                  Bui Viet Hoang
                </Text>
                <Text
                  style={{ color: "gray", fontSize: 14, fontWeight: "200" }}
                >
                  Xem trang ca nhan
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
        <MaterialIcons name={"qr-code"} size={30} color="#00bfff" />
        <Text style={{ marginLeft: 20 }}>QR cua toi</Text>
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
            <MaterialIcons name={"cloud"} size={30} color={"#00bfff"} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20, color: "Black", fontWeight: "200" }}>
              Cloud cua toi
            </Text>
            <Text style={{ color: "gray", fontSize: 14, fontWeight: "200" }}>
              Luu tru cac tin nhan quan trong
            </Text>
          </View>
        </View>
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
        <MaterialIcons name={"security"} size={30} color="#00bfff" />
        <Text style={{ marginLeft: 20 }}>Tai khoan va bao mat</Text>
        <MaterialIcons
          name={"arrow-right"}
          size={30}
          style={{ position: "absolute", right: 0 }}
        />
      </View>
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
        <MaterialIcons name={"privacy-tip"} size={30} color="#00bfff" />
        <Text style={{ marginLeft: 20 }}>Quyen rieng tu</Text>
        <MaterialIcons
          name={"arrow-right"}
          size={30}
          style={{ position: "absolute", right: 0 }}
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
