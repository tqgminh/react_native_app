import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, FlatList, Image, TouchableOpacity,
  Dimensions, SafeAreaView, ScrollView, Modal, Pressable,
} from 'react-native';
import Search from '../components/Search';
import { FILE_URL } from '../api/config';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { getList, likeAPI } from '../api/PostAPI';
import { showMessage } from 'react-native-flash-message';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { setListP } from '../redux/actions/postAction';
import { deleteAPI } from '../api/PostAPI';


export default function TimelineScreen({ navigation }) {
  const dispatch = useDispatch();
  const { token, phone, username, isLogin, avatar, id, userId, listPosts } = useSelector(
    (state) => state.userReducer
  );

  const [spinner, setSpinner] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  //const [listPosts, setListPosts] = useState([]);
  //var listPosts = [];
  //const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    getList(token).then((res) => {
      if (res.success) {
        console.log(JSON.stringify(res.data.data));
        //setListPosts(res.data.data.reverse());
        dispatch(setListP(res.data.data.reverse()));
      } else {
        showMessage({
          title: "get list Post fail!",
          message: "Có lỗi xảy ra vui lòng thử lại!",
          type: "fail",
          position: "center"
        });
      }
    });
  }, []);

  const likePress = async (id) => {
    // gọi api
    let list = [...listPosts];
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == id) {
        list[i].isLike = !list[i].isLike;
        if (list[i].like.includes(userId)) {
          let index = list[i].like.indexOf(userId);
          list[i].like.splice(index, 1);
        } else {
          list[i].like.push(userId);
        }

        //setListPosts(list);
        dispatch(setListP(list));
        likeAPI({ token, id }).then(res => {
          //list[i].like = res.data.data.like;
        }).catch(err => { });
      }
      //setListPosts(list);
    }
  }

  /* const likePress = (id) => {
    // gọi api
    let list = [...listPosts];
    for(let i=0; i < list.length; i++){
      if(list[i]._id==id){
        list[i].isLike=!list[i].isLike;
        if(list[i].isLike) list[i].like.push("Me");
        if(!list[i].isLike) list[i].like.pop();
      }
      setListPosts(list);
    }
  } */

  const cmtPress = (item) => {
    navigation.navigate('CommentScreen', {
      item1: item,
    });

  }


  const deletePostPress = async () => {
    let id = deleteId;
    let list = [...listPosts];
    let list1 = [...listPosts];
    setModalVisible1(!modalVisible1);
    //alert(JSON.stringify(id));
    //alert(id);
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == id) {
        //alert(id);
        let rs = await deleteAPI({ token, id });
        if (rs.success) {
          // mess xóa thành công
          showMessage({
            title: "Xóa bài đăng",
            message: "Xóa thành công!",
            type: "success",
            position: "center"
          });
          //remove post khỏi list
          list1.splice(i, 1);
          dispatch(setListP(list1));
          setDeleteId('');
        } else {
          // mess xóa thất bại
          showMessage({
            title: "get list Post fail!",
            message: "Có lỗi xảy ra vui lòng thử lại!",
            type: "fail",
            position: "center"
          });

          setDeleteId('');
        }
      }
    }

  }

  const editPostPress = () => {
    let items = {
      id: "",
      photos: [],
      described: "",
      count: 0
    }
    let postId = deleteId;
    let list = [...listPosts];
    let listPhoto = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == postId) {
        for (let j = 0; j < list[i].images.length; j++) {
          let photo = { uri: "" }
          photo.uri = FILE_URL + list[i].images[j].fileName;
          listPhoto.push(photo);
        }
        items.described = list[i].described;
        items.count = list[i].images.length;
        items.photos = listPhoto;
        items.id = deleteId;
        items.index = i;
      }
    }
    setModalVisible1(!modalVisible1);
    navigation.navigate("EditPostScreen", { item: items });
  }

  const reportPress = () => {

    showMessage({
      title: "Báo cáo bài viết!",
      message: "Báo cáo bài viết thành công!",
      type: "success",
      position: "center"
    });
    setDeleteId("");
    setModalVisible2(!modalVisible2);
  }


  const renderDemo = ({ item }) => {
    return (
      <View>
        <Text>{item.described}</Text>
      </View>
    );
  };

  const RenderImg = ({ photos }) => {
    let count = photos.length;

    if (count == 1) {
      return (
        <View style={{ justifyContent: 'center', alignContent: 'center', padding: 20 }}>
          <Image style={styles.image}
            source={{ uri: FILE_URL + photos[0].fileName }}
            key={count}>
          </Image>
        </View>
      );
    } if (count == 2) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
          <View style={{ width: '50%' }}>
            <Image style={styles.image}
              source={{ uri: FILE_URL + photos[0].fileName }}
              key={1}>
            </Image>
          </View>
          <View style={{ width: '50%' }}>
            <Image style={styles.image}
              source={{ uri: FILE_URL + photos[1].fileName }}
              key={2}>
            </Image>
          </View>
        </View>
      );
    }
    if (count == 3) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
          <View style={{ width: '50%' }}>
            <Image style={styles.image}
              source={{ uri: FILE_URL + photos[0].fileName }}
              key={1}>
            </Image>
          </View>
          <View style={{ width: '50%' }}>
            <View style={{ width: '100%' }}>
              <Image style={styles.image2}
                source={{ uri: FILE_URL + photos[1].fileName }}
                key={2}>
              </Image>
            </View>
            <View style={{ width: '100%' }}>
              <Image style={styles.image2}
                source={{ uri: FILE_URL + photos[2].fileName }}
                key={3}>
              </Image>
            </View>

          </View>
        </View>
      );
    }
    if (count == 4) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
          <View style={{ width: '50%' }}>
            <View style={{ width: '100%' }}>
              <Image style={styles.image2}
                source={{ uri: FILE_URL + photos[0].fileName }}
                key={1}>
              </Image>
            </View>
            <View style={{ width: '100%' }}>
              <Image style={styles.image2}
                source={{ uri: FILE_URL + photos[1].fileName }}
                key={2}>
              </Image>
            </View>

          </View>
          <View style={{ width: '50%' }}>
            <View style={{ width: '100%' }}>
              <Image style={styles.image2}
                source={{ uri: FILE_URL + photos[2].fileName }}
                key={3}>
              </Image>
            </View>
            <View style={{ width: '100%' }}>
              <Image style={styles.image2}
                source={{ uri: FILE_URL + photos[3].fileName }}
                key={4}>
              </Image>
            </View>

          </View>
        </View>
      );
    }
    else {
      return (<View></View>);
    }
  }

  const renderPosts = ({ item }) => {
    return (<View style={{ borderBottomWidth: 7, borderBottomColor: 'rgb(230,230,230)', padding: 15 }}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '20%' }}>
          <Image
            source={{ uri: FILE_URL + avatar.fileName }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginLeft: 5,
            }}
          />
        </View>

        <TouchableOpacity style={{ width: "70%" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {item.author.username}
          </Text>
          <Text>{item.createdAt}</Text>
        </TouchableOpacity>
        {(item.author._id == id) &&
          <TouchableOpacity style={{ width: "10%" }} onPress={() => { setDeleteId(item._id); setModalVisible1(!modalVisible1); }}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        }
        {(item.author._id != id) &&
          <TouchableOpacity style={{ width: "10%" }} onPress={() => { setDeleteId(item._id); setModalVisible2(!modalVisible2); }}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        }
      </View>

      <View
        style={{ borderBottomWidth: 2, borderBottomColor: "rgb(230,230,230)" }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{item.described}</Text>
        </View>

        <View>
          <RenderImg photos={item.images} />
        </View>
      </View>

      <View style={{ flexDirection: 'row', fontSize: 20 }}>
        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => likePress(item._id)}>
            {(item.isLike == true) && <AntDesign name="heart" size={24} color="red" />}
            {(item.isLike == false) && <AntDesign name="heart" size={24} color="#dcdcdc" />}
          </TouchableOpacity>

          <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.like.length}</Text>
        </View>

        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }} onPress={() => cmtPress(item)}>
            <FontAwesome5 name="comment-dots" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.countComments}</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>);
  }

  return (
    <View style={{ flex: 1 }}>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
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
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(220,220,220)', borderRadius: 20, marginBottom: 10 }}
              onPress={deletePostPress}
            >
              <Text style={{ fontSize: 25 }}>Xóa bài viết</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(220,220,220)', borderRadius: 20, marginBottom: 10 }}
              onPress={editPostPress}
            >
              <Text style={{ fontSize: 25 }}>Chỉnh sửa bài viết</Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
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
              marginTop: 100,
              padding: 40,
              borderRadius: 10,
              // flex: 1,
            }}
          >
            <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(220,220,220)', borderRadius: 20, marginBottom: 10 }}
              onPress={reportPress}
            >
              <Text style={{ fontSize: 25 }}>Báo cáo bài viết</Text>
            </TouchableOpacity>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <Search navigation={navigation} />


      <SafeAreaView>

        <FlatList nestedScrollEnabled
          style={{ height: "100%" }}
          ListHeaderComponent={
            <View style={{ width: "100%" }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  borderTopWidth: 7,
                  borderTopColor: "rgb(230,230,230)",
                  padding: 10,
                  borderBottomWidth: 1,
                }}
              >
                <Image
                  source={{ uri: FILE_URL + avatar.fileName }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    marginLeft: 5,
                  }}
                />
                <TouchableOpacity style={{ width: '80%', paddingLeft: 10 }} onPress={() => { navigation.navigate('AddPostScreen') }}>
                  <Text style={{ fontSize: 17, color: 'rgb(100,100,100)' }}>Hôm nay bạn thế nào?</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  borderBottomWidth: 7,
                  borderBottomColor: "rgb(230,230,230)",
                }}
              >
                <TouchableOpacity style={styles.post_icon}>
                  <Ionicons name="image" size={24} color="#006400" />
                  <Text style={styles.post_icon_text}>Đăng ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.post_icon]}>
                  <FontAwesome name="video-camera" size={24} color="#e9967a" />
                  <Text style={styles.post_icon_text}>Đăng video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.post_icon]}>
                  <Ionicons name="cloud-circle-sharp" size={24} color="#1e90ff" />
                  <Text style={styles.post_icon_text}>Tạo album</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
          extraData={listPosts}
          data={listPosts}
          renderItem={renderPosts}
          keyExtractor={item => item._id}
          ListFooterComponent={<>
          </>} />
      </SafeAreaView>

      {/* <View style={{ borderBottomWidth: 7, borderBottomColor: 'rgb(230,230,230)', padding: 15 }}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '20%' }}>
            <Image
              source={{ uri: FILE_URL + avatar.fileName }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 5,
              }}
            />
          </View>

          <TouchableOpacity style={{ width: "70%" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Nguyễn Văn Thanh
            </Text>
            <Text>7/11 lúc 9:13</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "10%" }}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "rgb(230,230,230)",
          }}
        >
          <View>
            <Text style={{ fontSize: 20 }}>Hôm nay thật buồn!</Text>
          </View>

          <View>
            <Image
              source={{ uri: FILE_URL + avatar.fileName }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 50,
                marginLeft: 5,
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", fontSize: 20 }}>
          <View
            style={{
              flexDirection: "row",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <AntDesign name="heart" size={24} color="red" />
            <Text style={{ marginLeft: 10, fontSize: 20 }}>10</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="comment-dots" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 20 }}>100</Text>
          </View>
        </View>

      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  post_icon: {
    width: "33.33%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 1,
  },

  post_icon_text: {
    paddingLeft: 5,
    fontWeight: "bold",
  },

  image: {
    flex: 1,
    width: "100%",
    height: 360,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "rgb(200,200,200)",
    borderRadius: 10,
    overflow: "hidden",
  },

  image2: {
    flex: 1,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "rgb(200,200,200)",
    borderRadius: 10,
    overflow: "hidden",
  },
  spinnerTextStyle: {
    color: '#FFF'
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: "white"
  }
});
