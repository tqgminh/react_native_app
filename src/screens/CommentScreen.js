import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, TextInput } from 'react-native';
import TitleBar from '../components/TitleBar';
import { FILE_URL } from '../api/config';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, AntDesign, EvilIcons, Feather, Foundation, MaterialIcons } from '@expo/vector-icons';
import { getList, likeAPI, listCommentAPI } from '../api/PostAPI';
import { showMessage } from 'react-native-flash-message';
import { useSelector, useDispatch } from 'react-redux';

export default function CommentScreen({ navigation, route }) {
  const { token, phone, username, isLogin, avatar } = useSelector(state => state.userReducer);
  const item = route.params.item;
  const itemId = item._id;
  const [comments, setComments] = useState([]);

  useEffect( () => {
    let id = route.params.item._id;
    listCommentAPI({token, id})
      .then(res => {
        if (res.success) {
          console.log(JSON.stringify(res.data.data))
          setComments(res.data.data);
        } else {
          showMessage({
            title: 'get list comment fail!',
            message: 'Có lỗi xảy ra vui lòng thử lại!',
            type: 'fail',
          });
        }
      })
    //return () => mounted = false;
  }, []);

  const likePress = async (id) => {
    // gọi api
    let list = item;
    for (let i = 0; i < list.length; i++) {
      if (list._id == id) {
        likeAPI({ token, id }).then(res => {
          list.isLike = !list.isLike;
          list.like = res.data.data.like;
        }).catch(err => { });
      }
      item = list;
    }
  }




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




  return (
    <View>
      <TitleBar navigation={navigation} data={{ text: 'Bình luận' }} />

      <ScrollView style={{height: '80%'}}>
        <View style={{ borderBottomWidth: 7, borderBottomColor: 'rgb(230,230,230)', padding: 15 }}>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ width: '20%' }}>
              <Image
                source={{ uri: FILE_URL + item.author.avatar.fileName }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginLeft: 5,
                }}
              />
            </View>

            <TouchableOpacity style={{ width: '70%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.author.username}</Text>
              <Text>{item.createdAt}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '10%' }}>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomWidth: 2, borderBottomColor: 'rgb(230,230,230)' }}>
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

            {/* <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' }} onPress={() => cmtPress(item)}>
              <FontAwesome5 name="comment-dots" size={24} color="black" />
              <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.countComments}</Text>
            </TouchableOpacity>
          </View> */}

          </View>

        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
          <MaterialIcons style={{ flex: 3 }} name="insert-emoticon" size={24} color="black" />
        </TouchableOpacity>

        <TextInput style={{ flexDirection: 'row', flex: 5 }}></TextInput>

        <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => { navigation.navigate('ImageBrowserScreen'); }}>
          <Feather style={{ flex: 1 }} name="image" size={24} color="black" />
        </TouchableOpacity>
      

        {/* <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => { navigation.navigate('ImageBrowserScreen'); }}>
          <Foundation style={{ flex: 1 }} name="play-video" size={24} color="black" />
        </TouchableOpacity> */}

        <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>

        {/* <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
          <EvilIcons style={{ flex: 1 }} name="location" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  post_icon: {
    width: '33.33%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1
  },

  footer: {
    height: '10%',
    flexDirection: 'row',
    backgroundColor: 'rgb(220,220,220)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  post_icon_text: {
    paddingLeft: 5,
    fontWeight: 'bold'
  },

  image: {
    flex: 1,
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: "rgb(200,200,200)",
    borderRadius: 10,
    overflow: "hidden",
  },

  image2: {
    flex: 1,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: "rgb(200,200,200)",
    borderRadius: 10,
    overflow: "hidden",
  },
});