import React from 'react';
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { Divider } from 'react-native-paper';
import OptionsBar from '../components/OptionsBar';
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { defaultColor } from '../styles';
import { showOUserAPI } from '../redux/actions/userAction';
import { useSelector, useDispatch } from "react-redux";

export default function OptionsScreen({navigation, route}) {
  const { name } = route.params;
  const { imageUri } = route.params;
  const { userId } = route.params;
  const { token} = useSelector(
		(state) => state.userReducer
	);
  const options = [{
    id: '1',
    icon: 'home',
    name: 'Trang cá nhân',
    color: 'black',
    event: async () => {
      let info = {};
      await showOUserAPI({token, userId}).then((res) => {
        if (res.success) {
         // alert(res.data.data);
          info = res.data.data;
        } else {
          showMessage({
            title: "get list Info!",
            message: "Có lỗi xảy ra vui lòng thử lại!",
            type: "fail",
            position: "center"
          });
          return;
        }
      });

      navigation.navigate("OtherUserInfoScreen", {info: info});
    }
  }, {
    id: '2',
    icon: 'report',
    name: 'Chặn',
    color: 'black',
    event: () => {
      console.warn("Chặn người này")
    }
  }, {
    id: '3',
    icon: 'delete',
    name: 'Xóa lịch sử trò chuyện',
    color: 'red',
    event: () => {
      console.warn("Xóa cuộc trò chuyện này")
    }
  }]


  return (
    <View style={styles.container}>
      <OptionsBar navigation={navigation}/>
      <View style={styles.info}>
        <Image source={{uri:imageUri}} style={styles.avatar} />
        <Text style={styles.textName}>{name}</Text>
      </View>
      <Divider style={{borderBottomColor: defaultColor}} />
      <FlatList
        style={{width: '100%'}}
        data={options}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={item.event}>
              <View style={{flexDirection: 'row', height: 50, marginLeft: 10}}>
                <MaterialIcons style={[{margin: 12}]} name={item.icon} size={25} color={item.color} />
                <Text style={{fontSize: 20, color: item.color, margin: 10}}>{item.name}</Text>
              </View>
              <Divider style={{borderBottomColor: defaultColor}} />
            </TouchableOpacity>
          )
        }}
        keyExtractor={( item ) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
  },
 
});