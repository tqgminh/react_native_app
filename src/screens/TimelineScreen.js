import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Search from '../components/Search';
import { useSelector } from 'react-redux';
import { FILE_URL } from '../api/config';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { getList } from '../api/PostAPI';
import { showMessage } from 'react-native-flash-message';

export default function TimelineScreen({ navigation }) {
  const { token, phone, username, isLogin, avatar } = useSelector(state => state.userReducer);
  const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    getList(token)
      .then(res => {
        if (res.success) {
          console.log(JSON.stringify(res.data.data))
          setListPosts(res.data.data);
        } else {
          showMessage({
            title: 'get list Post fail!',
            message: 'Có lỗi xảy ra vui lòng thử lại!',
            type: 'fail',
          });
        }
      })
    //return () => mounted = false;
  }, []);

  const likePress = () => {

  }

  const renderDemo = ({item}) =>{
    return (<View><Text>{item.described}</Text></View>);
  }


  const RenderImg = ({photos}) => {
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

  const renderPosts = ({item}) => {
    <View style={{ borderBottomWidth: 7, borderBottomColor: 'rgb(230,230,230)', padding: 15 }}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ width: '20%' }}>
          <Image
            source={{ uri: FILE_URL + "avatar_2.png" }}
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

        {/* <View>
          <RenderImg photos={item.images}/>
        </View> */}
      </View>

      <View style={{ flexDirection: 'row', fontSize: 20 }}>
        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
          <AntDesign name="heart" size={24} color="red" />
          <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.like.length}</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
          <FontAwesome5 name="comment-dots" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.countComments}</Text>
        </View>
      </View>

    </View>
  }

  return (
    <View style={{ flex: 1 }}>
      <Search navigation={navigation} />
      <View style={{ width: '100%' }}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', borderTopWidth: 7, borderTopColor: 'rgb(230,230,230)', padding: 10, borderBottomWidth: 1 }}>
          <Image
            source={{ uri: FILE_URL + avatar.fileName }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              marginLeft: 5,
            }}
          />
          <TouchableOpacity style={{ width: '80%', paddingLeft: 10 }}>
            <Text style={{ fontSize: 17, color: 'rgb(100,100,100)' }}>Hôm nay bạn thế nào?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', flexDirection: 'row', borderBottomWidth: 7, borderBottomColor: 'rgb(230,230,230)' }}>
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

      <SafeAreaView style={styles.container}>
        <FlatList
          data={listPosts}
          renderItem={renderDemo}
          keyExtractor={item => item._id}
        />
      </SafeAreaView>

      <View style={{ borderBottomWidth: 7, borderBottomColor: 'rgb(230,230,230)', padding: 15 }}>
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

          <TouchableOpacity style={{ width: '70%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nguyễn Văn Thanh</Text>
            <Text>7/11 lúc 9:13</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '10%' }}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ borderBottomWidth: 2, borderBottomColor: 'rgb(230,230,230)' }}>
          <View>
            <Text style={{ fontSize: 20 }}>
              Hôm nay thật buồn!
            </Text>
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

        <View style={{ flexDirection: 'row', fontSize: 20 }}>
          <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
            <AntDesign name="heart" size={24} color="red" />
            <Text style={{ marginLeft: 10, fontSize: 20 }}>10</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center' }}>
            <FontAwesome5 name="comment-dots" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 20 }}>100</Text>
          </View>
        </View>

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