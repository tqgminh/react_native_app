import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export default function MessagesScreen() {
  const { token, phone, username, isLogin } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>{isLogin}</Text>
      <Text>{phone}</Text>
      <Text>{username}</Text>
      <Text>{token}</Text>
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