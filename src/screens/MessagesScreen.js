import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from 'react-native-paper';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Search from '../components/Search';
import NewMessageButton from '../components/NewMessageButton';
import AddFriendButton from '../components/AddFriendButton';
import { defaultColor } from '../styles';
import { getAllChatInfo } from '../api/ChatAPI';
import { showMessage } from 'react-native-flash-message';
import { setListChatState, setListProfileChatState } from '../redux/actions/chatAction';
import { FILE_URL } from '../api/config';
import { showOUserAPI } from '../redux/actions/userAction';
import { removeBlockMess } from '../helpers/blockHelpers';

const conversations = [{
  id: '1',
  partner: {
    id: 'u1',
    name: 'Nguyễn Quang Huy',
    imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
    isFriend: true,
  },
  lastMessage: {
    id: 'm1',
    content: 'Còn cái nịt!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '2',
  partner: {
    id: 'u2',
    name: 'Nguyễn Văn Thanh',
    imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/s320x320/53419601_2187033871611868_5753282342814744576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=V9hgJhBl8d0AX_LU1ff&_nc_ht=scontent.fhph1-2.fna&oh=e2064a6dfd192328096fd915ac79ca1f&oe=619D31A5',
    isFriend: true,
  },
  lastMessage: {
    id: 'm2',
    content: 'Có làm mới có ăn!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '3',
  partner: {
    id: 'u3',
    name: 'Bùi Việt Hoàng',
    imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Fh1ptSCHgwAX-oJCI7&_nc_ht=scontent.fhph1-3.fna&oh=782b737a7021379d0d5cc7c895f351b0&oe=619F8B7A',
    isFriend: true,
  },
  lastMessage: {
    id: 'm3',
    content: 'Cần cù bù siêng năng!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '4',
  partner: {
    id: 'u4',
    name: 'Vũ Xuân Khánh',
    imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/p320x320/134994572_2626773770956391_4564113000548582004_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sVSICmD7zNQAX-jYb8v&_nc_ht=scontent.fhph1-2.fna&oh=25b50b4bba8b2bbe481329f8dacb2a6b&oe=619D398A',
    isFriend: true,
  },
  lastMessage: {
    id: 'm4',
    content: 'Bạn là nhất!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '5',
  partner: {
    id: 'u5',
    name: 'Trần Quang Minh',
    imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/240530572_3042163572773692_5707998733869317352_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hP1ksMyITCkAX_cT_Ic&_nc_ht=scontent.fhph1-2.fna&oh=6bf85a3b0bc5f8afff89103d499698df&oe=619DFDD6',
    isFriend: false,
  },
  lastMessage: {
    id: 'm5',
    content: 'Enjoy cái moment này!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}]

export default function MessagesScreen({ navigation }) {
  const dispatch = useDispatch();
  const { token, isLogin, username, listChats, id, listProfileChats, blocks } = useSelector(state => state.userReducer);
  let fileName = "avatar_2.png"

  useEffect(() => {
    getAllChatInfo(token, dispatch, id, blocks).then((res) => {
      if (res) {
        //console.log(JSON.stringify(res.data.data));
        //setListPosts(res.data.data.reverse()); 
        //dispatch(setListProfileChatState(list.reverse()));
        //dispatch(setListChatState(res.data.data.reverse()));
        /* let list = removeBlockMess(listProfileChats, blocks);
        dispatch(setListProfileChatState(list.reverse())); */
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

  const renderChat = ({item}) =>{
      let fontSeen='normal';
      let colorSeen='black';
      /* if(index < item.numNewMessage) {
        fontSeen = 'bold';
        colorSeen = defaultColor
      } else {
        fontSeen = 'normal';
        colorSeen = 'black';
      } */

      return (
        <View>
          <TouchableOpacity onPress={() =>
            navigation.navigate('ChatScreen',
            {name: item.name,
            imageUri: FILE_URL + item.avatarFileName,
            isFriend: true,
            chatId1: item.chatId,
            receivedId: item.receivedId
            })}>
            <View style={conversationStyles.container}>
              <View style={conversationStyles.lefContainer}>
                <Image source={{ uri: FILE_URL + item.avatarFileName }}
                style={conversationStyles.avatar} />
                <View style={conversationStyles.midContainer}>
                  <Text style={conversationStyles.username}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={1}
                  style={{fontWeight:fontSeen,color:colorSeen}}>
                    {item.message}
                  </Text>
                </View>
              </View>
              <Text style={conversationStyles.time}>
                {/* {moment(item.lastMessage.createdAt).fromNow()} */}
              </Text>
            </View>
            <Divider style={{borderBottomColor: defaultColor}} />
          </TouchableOpacity>
          {/* {(index == conversations.length-1) &&
          <View>
            <Text style={{color: 'grey',
            textAlign: 'center',
            marginTop: 20}}>
              Kết nối với nhiều người hơn
            </Text>
            <AddFriendButton style={{textAlign: 'center'}} />
          </View>} */}
        </View>
      );
  };

  return (
    <View style={styles.container}>
      <Search navigation = {navigation}/>
      <FlatList
        style={{width: '100%'}}
        extraData={listProfileChats}
        data={listProfileChats}
        renderItem={renderChat}
        keyExtractor={item => item.infoId}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const conversationStyles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: "space-between",
      padding: 10,
  },
  lefContainer: {
      flexDirection: 'row',
  },
  midContainer: {
      justifyContent: 'space-around',
  },
  avatar: {
      width: 60,
      height: 60,
      marginRight: 15,
      borderRadius: 50,
  },
  username: {
      fontWeight: 'bold',
      fontSize: 16,
  },
  status: {
      fontSize: 16,
      color: 'grey',
  },
  time: {
      fontSize: 14,
      color: 'grey',
  }
});






/* import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from 'react-native-paper';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Search from '../components/Search';
import NewMessageButton from '../components/NewMessageButton';
import AddFriendButton from '../components/AddFriendButton';
import { defaultColor } from '../styles';

const conversations = [{
  id: '1',
  partner: {
    id: 'u1',
    name: 'Nguyễn Quang Huy',
    imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
    isFriend: true,
  },
  lastMessage: {
    id: 'm1',
    content: 'Còn cái nịt!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '2',
  partner: {
    id: 'u2',
    name: 'Nguyễn Văn Thanh',
    imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/s320x320/53419601_2187033871611868_5753282342814744576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=V9hgJhBl8d0AX_LU1ff&_nc_ht=scontent.fhph1-2.fna&oh=e2064a6dfd192328096fd915ac79ca1f&oe=619D31A5',
    isFriend: true,
  },
  lastMessage: {
    id: 'm2',
    content: 'Có làm mới có ăn!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '3',
  partner: {
    id: 'u3',
    name: 'Bùi Việt Hoàng',
    imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/54524031_435375897022452_1255296843290509312_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-Fh1ptSCHgwAX-oJCI7&_nc_ht=scontent.fhph1-3.fna&oh=782b737a7021379d0d5cc7c895f351b0&oe=619F8B7A',
    isFriend: true,
  },
  lastMessage: {
    id: 'm3',
    content: 'Cần cù bù siêng năng!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '4',
  partner: {
    id: 'u4',
    name: 'Vũ Xuân Khánh',
    imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-1/p320x320/134994572_2626773770956391_4564113000548582004_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sVSICmD7zNQAX-jYb8v&_nc_ht=scontent.fhph1-2.fna&oh=25b50b4bba8b2bbe481329f8dacb2a6b&oe=619D398A',
    isFriend: true,
  },
  lastMessage: {
    id: 'm4',
    content: 'Bạn là nhất!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}, {
  id: '5',
  partner: {
    id: 'u5',
    name: 'Trần Quang Minh',
    imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/240530572_3042163572773692_5707998733869317352_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hP1ksMyITCkAX_cT_Ic&_nc_ht=scontent.fhph1-2.fna&oh=6bf85a3b0bc5f8afff89103d499698df&oe=619DFDD6',
    isFriend: false,
  },
  lastMessage: {
    id: 'm5',
    content: 'Enjoy cái moment này!',
    createdAt: '2021-10-27T14:48:00.000Z',
  },
  numNewMessage: 2,
}]

export default function MessagesScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Search navigation = {navigation}/>
      <FlatList
        style={{width: '100%'}}
        data={conversations}
        renderItem={({item, index}) => {
          var fontSeen;
          var colorSeen;
          if(index < item.numNewMessage) {
            fontSeen = 'bold';
            colorSeen = defaultColor
          } else {
            fontSeen = 'normal';
            colorSeen = 'black';
          }

          return (
            <View>
              <TouchableOpacity onPress={() =>
                navigation.navigate('ChatScreen',
                {name: item.partner.name,
                imageUri: item.partner.imageUri,
                isFriend: item.partner.isFriend})}>
                <View style={conversationStyles.container}>
                  <View style={conversationStyles.lefContainer}>
                    <Image source={{ uri: item.partner.imageUri }}
                    style={conversationStyles.avatar} />
                    <View style={conversationStyles.midContainer}>
                      <Text style={conversationStyles.username}>
                        {item.partner.name}
                      </Text>
                      <Text numberOfLines={1}
                      style={{fontWeight:fontSeen,color:colorSeen}}>
                        {item.lastMessage.content}
                      </Text>
                    </View>
                  </View>
                  <Text style={conversationStyles.time}>
                    {moment(item.lastMessage.createdAt).fromNow()}
                  </Text>
                </View>
                <Divider style={{borderBottomColor: defaultColor}} />
              </TouchableOpacity>
              {(index == conversations.length-1) &&
              <View>
                <Text style={{color: 'grey',
                textAlign: 'center',
                marginTop: 20}}>
                  Kết nối với nhiều người hơn
                </Text>
                <AddFriendButton style={{textAlign: 'center'}} />
              </View>}
            </View>
          )
        }}
        keyExtractor={( item ) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const conversationStyles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: "space-between",
      padding: 10,
  },
  lefContainer: {
      flexDirection: 'row',
  },
  midContainer: {
      justifyContent: 'space-around',
  },
  avatar: {
      width: 60,
      height: 60,
      marginRight: 15,
      borderRadius: 50,
  },
  username: {
      fontWeight: 'bold',
      fontSize: 16,
  },
  status: {
      fontSize: 16,
      color: 'grey',
  },
  time: {
      fontSize: 14,
      color: 'grey',
  }
}); */