import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Search from '../components/Search';
import { useSelector, useDispatch } from 'react-redux';

export default function DiscoveryScreen({navigation}) {
  const { token, phone, username, isLogin, avatar, coverImage } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{isLogin}</Text>
      <Text>{phone}</Text>
      <Text>{username}</Text>
      <Text>{token}</Text>
      <Text>{avatar.fileName}</Text>
      <Text>{coverImage.fileName}</Text>
      <Button title="Bấm" onPress = {()=>{navigation.navigate('AddPostScreen')}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});