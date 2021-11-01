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

export default function FriendInfoScreen({ navigation }) {
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
              color: "white",
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
        ></TouchableOpacity>
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
          <Divider style={{ marginTop: 20 }} />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            Bai Viet
          </Text>
          <View style={styles.newPost}>
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  backgroundColor: "gray",
                  borderRadius: 10,
                  width: "80%",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                12/06/2000 at 16:11
              </Text>
              <Text style={{ textAlign: "left", marginTop: 20 }}>
                Nhat ma dut tui: Tham lam! Nhat ma tra lai: Ngu dot! Con cai nit
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Image
                source={require("../assets/images/nguoi.jpeg")}
                style={{
                  width: 140,
                  height: 140,
                  marginTop: 20,
                  marginLeft: 20,
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              />
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
    backgroundColor: "gray",
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
    color: "white",
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
    width: "100%",
    height: 200,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
