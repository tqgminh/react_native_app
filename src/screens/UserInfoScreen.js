import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  Modal,
  Pressable,
  TouchableOpacity
} from "react-native";
import OptionsBar from "../components/OptionsBar";
import UserHeader from "../components/userInfo/UserHeader.js";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Divider } from "react-native-paper";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { defaultColor } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { FILE_URL } from "../api/config";
import * as ImagePicker from 'expo-image-picker';
import { updateAvatarAPI } from "../redux/actions/userAction";
import { setAvatar } from "../redux/actions/userAction";
import { showMessage } from 'react-native-flash-message';

export default function UserInfoScreen({ navigation }) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { token, phone, username, isLogin, avatar, coverImage } = useSelector(state => state.userReducer);

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    setModalVisible(false);
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setModalVisible2(true);
    setSelectedImage({ uri: pickerResult.uri });
  };


  const avatarPress = () =>{
    updateAvatarAPI(token, selectedImage)
    .then(res=>{
      if(res.success){
        let newAvatar =  {
          type: '',
          _id: '',
          fileName: ''
        };
        newAvatar.type = res.data.data.avatar.type;
        newAvatar._id = res.data.data.avatar._id;
        newAvatar.fileName = res.data.data.avatar.fileName;
        dispatch(setAvatar(newAvatar));
      }else{
        showMessage({
          title: "Lỗi update avatar!",
          message: "Có lỗi xảy ra vui lòng thử lại!",
          type: "fail",
          position: "center"
        });
      }
    })
  }


  const modal = [
    {
      id: "1",
      icon: "visibility",
      name: "Xem ảnh đại diện",
      color: "black",
      event: () => {
        console.log("");
      },
    },
    {
      id: "2",
      icon: "photo-camera",
      name: "Chụp ảnh mới",
      color: "black",
      event: () => {
        console.log("");
      },
    },
    {
      id: "3",
      icon: "image",
      name: "Chọn ảnh từ thiết bị",
      color: "black",
      event: openImagePickerAsync
    },
    {
      id: "4",
      icon: "collections",
      name: "Chọn ảnh đại diện có sẵn",
      color: "black",
      event: () => {
        console.log("");
      },
    },
  ];
  const media = [
    {
      id: "1",
      count: "100",
      title: "Yêu thích nhất",
      image: require("../assets/images/winter.jpg"),
    },
    {
      id: "2",
      count: "100",
      title: "Xem nhiều nhất",
      image: require("../assets/images/nguoi.jpeg"),
    },
    {
      id: "3",
      count: "100",
      title: "Album",
      image: require("../assets/images/scenary.jpeg"),
    },
    {
      id: "4",
      count: "100",
      title: "Video",
      image: require("../assets/images/bridge.jpeg"),
    },
  ];



  return (
    <View style={styles.container}>
      <ScrollView
        vertical={true}
        showVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fafafa" }}
      >
        <View
          style={
            {
              // alignItems: "center",
              // justifyContent: "center",
            }
          }
        >
          <Image
            source={{ uri: FILE_URL + coverImage.fileName }}
            style={styles.background_image}
          />
          <View style={{ position: "absolute", top: 10, right: 20, alignSelf: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Demo")}>
              <MaterialIcons
                style={{ marginLeft: 20 }}
                name="more-horiz"
                size={50}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              //Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View
                style={{
                  backgroundColor: "#ffffff",
                  marginTop: 100,
                  padding: 40,
                  borderRadius: 10,
                  // flex: 1,
                }}
              >
                <FlatList
                  style={{ width: "100%" }}
                  data={modal}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity onPress={item.event}>
                        <View
                          style={{
                            flexDirection: "row",
                            height: 50,
                            marginLeft: 10,
                          }}
                        >
                          <MaterialIcons
                            style={[{ margin: 12 }]}
                            name={item.icon}
                            size={25}
                            color={item.color}
                          />
                          <Text
                            style={{
                              fontSize: 20,
                              color: item.color,
                              margin: 10,
                            }}
                          >
                            {item.name}
                          </Text>
                        </View>
                        <Divider style={{ borderBottomColor: defaultColor }} />
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => item.id}
                />
                <Text style={{ fontSize: 50, textAlign: "center" }}>
                  Ảnh đại diện
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Ẩn cài đặt</Text>
                </Pressable>
              </View>
            </View>
          </Modal>


          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              //Alert.alert("Modal has been closed.");
              setModalVisible2(!modalVisible2);
            }}
          >
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View
                style={{
                  backgroundColor: "#ffffff",
                  marginTop: 90,
                  alignItems: "center",
                  borderRadius: 10,
                  paddingBottom: 20,
                  paddingTop: 20
                  // flex: 1,
                }}
              >
                {selectedImage != null && <Image
                  source={{ uri: selectedImage.uri }}
                  style={{width: 300, height: 300, borderRadius: 300, borderColor: "#00bfff", borderWidth: 10}}
                  resizeMode="cover"
                ></Image>}
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  Ảnh đại diện
                </Text>
                <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[styles.button, styles.buttonClose, {width: 100}]}
                  onPress={() => setModalVisible2(!modalVisible2)}
                >
                  <Text style={styles.textStyle}>Bỏ qua</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose, {marginLeft: 20, width: 100}]}
                  onPress={() =>{
                    avatarPress();
                    setModalVisible2(!modalVisible2)
                  } }
                >
                  <Text style={styles.textStyle}>Cập nhật</Text>
                </Pressable>
                </View>
                
              </View>
            </View>
          </Modal>

          <View style={{ alignSelf: "center", top: -50 }}>
            <View style={{}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  source={{ uri: FILE_URL + avatar.fileName }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    overflow: "hidden",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                color: "black",
                position: "absolute",
                top: 20,
                width: 20,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="add-a-photo" size={20} color="#cdcdcd" />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginTop: -30,
              fontSize: 20,
              // color: "white",
            }}
          >
            {username}
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
              }}
            >
              Thêm bài viết
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true}>
            <FlatList
              style={{ flexDirection: "row" }}
              numColumns={4}
              data={media}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("PhotoAlbumScreen");
                    }}
                  >
                    <View style={styles.mediaImageContainer}>
                      <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="cover"
                      ></Image>
                      <View style={styles.mediaCount}>
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 24,
                              color: "#dfd8c8",
                              fontWeight: "300",
                            },
                          ]}
                        >
                          {item.count}
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
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.newPost}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    width: "80%",
                    textAlign: "center",
                    marginTop: 4,
                  }}
                >
                  12/06/2000 at 16:11
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{ textAlign: "left", marginTop: 20, width: "50%" }}
                >
                  Nhặt mà đút túi: Tham lam! Nhặt mà trả lại: Ngu dốt! Còn cái
                  nịt
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
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
    backgroundColor: defaultColor,
    marginTop: 25
  },
  text: {
    color: "#52575d",
  },
  background_image: {
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    // alignContent: "center",
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
    marginTop: 20,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#ececec",
    padding: 10,
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
  //
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
