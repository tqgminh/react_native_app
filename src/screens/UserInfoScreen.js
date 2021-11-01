import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import OptionsBar from "../components/OptionsBar";
import UserHeader from "../components/userInfo/UserHeader.js";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-paper";
const userinfo = [
  {
    id: "1",
    name: "Bui Viet Hoang",
  },
];

export default function UserInfoScreen({ navigation }) {
  // console.log(userinfo[0].name);
  return (
    <View style={styles.container}>
      <UserHeader navigation={navigation} name={userinfo[0].name} />
      <ScrollView vertical={true} showVerticalScrollIndicator={false}>
        <View>
          <Image
            source={{
              uri: require("../assets/images/anh_bia.jpeg"),
            }}
            style={styles.background_image}
          />
          <TouchableOpacity>
            <MaterialIcons
              name="add-a-photo"
              size={40}
              style={styles.adding_camera}
            />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Fh1ptSCHgwAX-oJCI7&_nc_ht=scontent.fhph1-3.fna&oh=782b737a7021379d0d5cc7c895f351b0&oe=619F8B7A",
            }}
            style={styles.avatar}
          />
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 60,
              fontSize: 20,
              // color: "white",
            }}
          >
            Bui Viet Hoang
          </Text>
          <Text style={{ color: "#aeb5bc" }}>Nothing so special</Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              borderRadius: 30,
              backgroundColor: "#00bfff",
              width: "60%",
              height: 40,
              color: "white",
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              // marginTop: 20,
            }}
          >
            <MaterialIcons
              name="add-circle-outline"
              size={30}
              style={{ color: "white", marginVertical: 5, marginLeft: 10 }}
            />
            <Text
              style={{
                marginVertical: 5,
                color: "white",
                marginLeft: 20,
                fontSize: 20,
                fontFamily: "Helvetica",
              }}
            >
              Them bai viet
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/winter.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
                <View style={styles.mediaCount}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 24, color: "#dfd8c8", fontWeight: "300" },
                    ]}
                  >
                    100
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        color: "#dfd8c8",
                      },
                    ]}
                  >
                    Yeu thich nhat
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/sunset.jpeg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
                <View style={styles.mediaCount}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 24, color: "#dfd8c8", fontWeight: "300" },
                    ]}
                  >
                    5
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        color: "#dfd8c8",
                      },
                    ]}
                  >
                    Nhieu binh luan nhat
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/dao.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
                <View style={styles.mediaCount}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 24, color: "#dfd8c8", fontWeight: "300" },
                    ]}
                  >
                    20
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        color: "#dfd8c8",
                      },
                    ]}
                  >
                    Album
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../assets/images/nguoi.jpeg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
                <View style={styles.mediaCount}>
                  <Text
                    style={[
                      styles.text,
                      { fontSize: 24, color: "#dfd8c8", fontWeight: "300" },
                    ]}
                  >
                    1
                  </Text>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontSize: 12,
                        color: "#dfd8c8",
                      },
                    ]}
                  >
                    Video
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={styles.newPost}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    backgroundColor: "gray",
                    borderRadius: 10,
                    width: "80%",
                    textAlign: "center",
                    marginTop: 4,
                  }}
                >
                  12/06/2000 at 16:11
                </Text>
              </View>
              <View style={{ flexDirection: "row", width: "80%" }}>
                <Text
                  style={{ textAlign: "left", marginTop: 20, width: "50%" }}
                >
                  Nhat ma dut tui: Tham lam! Nhat ma tra lai: Ngu dot! Con cai
                  nit
                </Text>
                <View
                  style={{
                    width: "50%",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 60,
                  }}
                >
                  <Image
                    source={require("../assets/images/nguoi.jpeg")}
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: 5,
                    }}
                  />
                </View>
              </View>

              <View style={styles.interact}>
                <MaterialIcons name={"favorite"} size={20} color={"red"} />
                <Text style={{ fontSize: 15, marginRight: 20 }}>10</Text>
                <MaterialIcons name={"comment"} size={20} />
                <Text style={{ fontSize: 15, marginRight: 20 }}>19</Text>
                <MaterialIcons name={"public"} size={20} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#c1c1c1",
  },
  text: {
    fontFamily: "Helvetica",
    color: "#52575d",
  },
  background_image: {
    width: "100%",
    height: 200,
  },
  adding_camera: {
    position: "absolute",
    right: 10,
    top: -20,
    color: "#c1c1c1",
    opacity: "20%",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    top: -50,
  },
  mediaImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
    position: "relative",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  mediaCount: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  newPost: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "#c1c1c1",
    padding: 3,
  },
  interact: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "flex-start",
    padding: 2,
    borderRadius: 5,
    opacity: 0.8,
    color: "red",
  },
});
