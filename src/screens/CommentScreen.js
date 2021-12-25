import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, TextInput } from 'react-native';
import TitleBar from '../components/TitleBar';
import { FILE_URL } from '../api/config';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, AntDesign ,MaterialCommunityIcons,Fontisto, EvilIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { getList, likeAPI, listCommentAPI, createCmtAPI } from '../api/PostAPI';
import { showMessage } from 'react-native-flash-message';
import { useSelector, useDispatch } from 'react-redux';
import { setListP } from '../redux/actions/postAction';
import { defaultColor } from '../styles';

export default function CommentScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const { token, phone, username, isLogin, avatar, id, listPosts } = useSelector(state => state.userReducer);
  const item1 = route.params.item1;
  const itemId = route.params.item1._id;
  const [comments, setComments] = useState([]);
  const [textCmt, setTextCmt] = useState("");
  const [item, setItem] = useState(item1);
  //let comments = [];
  useEffect(() => {
    let id = route.params.item1._id;
    listCommentAPI({ token, id })
      .then(res => {
        if (res.success) {
          console.log(JSON.stringify(res.data.data))
          setComments(res.data.data);
          //comments = res.data.data;
        } else {
          showMessage({
            title: 'get list comment fail!',
            message: 'Có lỗi xảy ra vui lòng thử lại!',
            type: 'fail',
            position: "center"
          });
        }
      });
    //return () => mounted = false;
  }, []);

  const onMircophonePress = () => {
		console.warn("Microphone")
	}


	const onPress = () => {
		if (!textCmt) {
			onMircophonePress();
		} else {
			sendCmtPress();
		}
	}

  const likePress = async (postId) => {
    let list = [...listPosts];
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == postId) {
        list[i].isLike = !list[i].isLike;
        if (list[i].like.includes(id)) {
          let index = list[i].like.indexOf(id);
          list[i].like.splice(index, 1);
        } else {
          list[i].like.push(id);
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

  const sendCmtPress = () => {
    let id = route.params.item1._id;
    createCmtAPI({ token, id, textCmt })
      .then(res => {
        if (res.success) {
          listCommentAPI({ token, id })
            .then(res => {
              if (res.success) {
                //console.log(JSON.stringify(res.data.data))
                setComments(res.data.data);
                //comments = res.data.data;
              } else {
                showMessage({
                  title: 'get list comment fail!',
                  message: 'Có lỗi xảy ra vui lòng thử lại1!',
                  type: 'fail',
                  position: "center"
                });
              }
            });
          // cập nhật số cmt trong listPosts
          let list = [...listPosts];
          for (let i = 0; i < list.length; i++) {
            if (list[i]._id == item._id) {
              list[i].countComments = list[i].countComments+1;
              dispatch(setListP(list));
              break;
            }
          }
          

        } else {
          showMessage({
            title: 'get list comment fail!',
            message: 'Có lỗi xảy ra vui lòng thử lại2!',
            type: 'fail',
            position: "center"
          });
        }
      });
      setTextCmt("");
  }


  const renderHeader = () => {
    return (
      <View>

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

          </View>

        </View>
      </View>
    );;
  };


  const renderComment = ({ item }) => {
    return (
      <View style={{marginLeft: 10, marginRight: 10, borderBottomColor: 'black',
      borderBottomWidth: 1,}}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ width: '20%' }}>
            <Image
              source={{ uri: FILE_URL + item.user.avatar.fileName }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 5,
              }}
            />
          </View>

          <TouchableOpacity style={{ width: '70%' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.user.username}</Text>
            <Text>{item.createdAt}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '10%' }}>
            <FontAwesome5 name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, marginLeft: 20, marginRight: 20, marginBottom: 10}}>{item.content}</Text>
      </View>);
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
      <FlatList nestedScrollEnabled
        style={{ height: "78%" }}
        ListHeaderComponent={renderHeader}
        extraData={comments}
        data={comments}
        renderItem={renderComment}
        keyExtractor={comment => comment._id}
      />


      {/* <View style={styles.footer}>
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
          <MaterialIcons style={{ flex: 3 }} name="insert-emoticon" size={24} color="black" />
        </TouchableOpacity>

        <TextInput style={{ flexDirection: 'row', flex: 5 }}
          placeholder="..."
          returnKeyType="done"
          value={textCmt}
          multiline
          onChangeText={(text) => setTextCmt(text)}
        >

        </TextInput>

        <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => { navigation.navigate('ImageBrowserScreen'); }}>
          <Feather style={{ flex: 1 }} name="image" size={24} color="black" />
        </TouchableOpacity>


        <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}
          onPress={sendCmtPress}
        >
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>
      </View> */}


      <View style={styles.ib_container}>
				<View style={styles.ib_mainContainer}>
					<FontAwesome5 name="laugh-beam" size={24} color="grey" />
					<TextInput
						placeholder={"..."}
						style={styles.ib_textInput}
						multiline
						value={textCmt}
						onChangeText={setTextCmt}
					/>
					<Entypo name="attachment" size={24} color="grey" style={styles.ib_icon}/>
					{!textCmt && <Fontisto name="camera" size={24} color="grey" style={styles.ib_icon}/>}
				</View>
				<TouchableOpacity onPress={onPress}>
					<View style={styles.ib_buttonContainer}>
						{!textCmt
						? <MaterialCommunityIcons name="microphone" size={28} color="white" />
						: <MaterialIcons name="send" size={28} color="white" />
						}
					</View>
				</TouchableOpacity>
			</View>
    </View >
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
  ib_container: {
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center',
	},
	ib_mainContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 50,
		marginRight: 10,
		flex: 1,
		alignItems: 'center',
	},
	ib_buttonContainer: {
		backgroundColor: defaultColor,
		borderRadius: 50,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',

	},
	ib_textInput: {
		flex: 1,
		marginHorizontal: 10,
	},
	ib_icon: {
		marginHorizontal: 5,
	}
});