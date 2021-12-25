import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList } from "react-native";
import { Button } from "react-native-paper";
import FriendsRequestHeader from "../components/invitation/FriendsRequestHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultColor } from "../styles";
import { getRequestedFriend } from "../api/FriendAPI";
import { useSelector, useDispatch } from 'react-redux';
import { FILE_URL } from "../api/config";
import { showMessage } from 'react-native-flash-message';
import { setAcceptFalseAPI } from "../api/FriendAPI";
import { setAcceptTrueAPI } from "../api/FriendAPI";


export default function FriendsRequestScreen({ navigation }) {
  const { token, phone, username, isLogin } = useSelector(state => state.userReducer);
  const [listRequestFriend, setListRequestFriend] = useState([]);
 // const [userId, setUserId] = useState("");

  useEffect(() => {
    getRequestedFriend(token).then((res) => {
      if (res.success) {
        //alert(res)
        //console.log(JSON.stringify(res.data.data));
        //setListPosts(res.data.data.reverse());
        setListRequestFriend(res.data.data.friends);
      } else {
        showMessage({
          title: "lấy yêu cầu kết bạn thất bại!",
          message: "Có lỗi xảy ra vui lòng thử lại!",
          type: "fail",
          position: "center"
        });
      }
    });
  }, []);

  const removeReq = (id) => {
    let userId = id;
    setAcceptFalseAPI({ token, userId }).then(res => {
      if (res.success) {
        let index = -1;
        let list = [...listRequestFriend];
        for (let i = 0; i < list.length; i++) {
          if (list[i]._id == userId) {
            index = i;
          }
        }

        showMessage({
          title: "Từ chối yêu cầu kết bạn thành công!",
          message: `Đã từ chối lời mời kết bạn của ${list[index].username} !`,
          type: "success",
          position: "center"
        });

        if(index>-1){
          list.splice(index, 1);
        }
        setListRequestFriend(list);
      }else{
        showMessage({
          title: "Từ chối yêu cầu kết bạn thất bại!",
          message: "Có lỗi xảy ra vui lòng thử lại!",
          type: "fail",
          position: "center"
        });
      }
    });
  }

  const acceptReq = (id) => {
    let userId = id;
    setAcceptTrueAPI({ token, userId }).then(res => {
      if (res.success) {
        let index = -1;
        let list = [...listRequestFriend];
        for (let i = 0; i < list.length; i++) {
          if (list[i]._id == userId) {
            index = i;
          }
        }

        showMessage({
          title: "Chấp nhận yêu cầu kết bạn thành công!",
          message: `Đã chấp nhận lời mời kết bạn của ${list[index].username} !`,
          type: "success",
          position: "center"
        });

        if(index>-1){
          list.splice(index, 1);
        }
        setListRequestFriend(list);
      }else{
        showMessage({
          title: "Chấp nhận yêu cầu kết bạn thất bại!",
          message: "Có lỗi xảy ra vui lòng thử lại!",
          type: "fail",
          position: "center"
        });
      }
    });
  }

  const renderListRequestFriend = ({ item }) => {
    return (
      <View>
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
              width: "65%",
              flex: 1,
              flexDirection: "row",
              marginTop: 5,
            }}
          >
            <View style={{}}>
              <Image
                source={{ uri: FILE_URL + item.avatar.fileName }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  marginLeft: 10,
                }}
              />
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text
                style={{ fontSize: 17, color: "black", fontWeight: "bold" }}
              >
                {item.username}
              </Text>
              <Text style={{ color: "gray", fontSize: 14, fontWeight: "200" }}>
                Từ số điện thoại
              </Text>
            </View>
          </View>
          <View style={{ width: "35%", marginTop: 5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={styles.button}
                  onPress={() =>{acceptReq(item._id);}
                    /* navigation.navigate("AcceptFriendRequestScreen", {item: item}) */
                  }
                >
                  ĐỒNG Ý
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 10 }}
                onPress={() => {
                  removeReq(item._id);
                }}
              >
                <MaterialIcons name={"close"} size={30} color="gray" />
              </TouchableOpacity>

            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", marginBottom: 5 }}>
          <Text style={styles.text}>
            Xin chào. Tôi là {item.username}, kết bạn với tôi nhé!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <FriendsRequestHeader navigation={navigation} />
        <SafeAreaView>
          <FlatList nestedScrollEnabled
            style={{ height: "100%" }}
            LisHeaderComponent={
              <>
              </>}
            extraData={listRequestFriend}
            data={listRequestFriend}
            renderItem={renderListRequestFriend}
            keyExtractor={item => item._id}
            ListFooterComponent={<>
            </>} />
        </SafeAreaView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultColor,
    fontWeight: "bold",
    borderRadius: 30,
    height: 40,
    color: "white",
    marginLeft: 10,
    textAlign: "center",
    textAlignVertical: "center",
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: defaultColor,
  },
  text: {
    fontSize: 14,
    color: defaultColor,
    paddingLeft: 30,
    paddingRight: 30,
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
});
