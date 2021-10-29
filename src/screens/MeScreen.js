import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../api/config';
import { setToken, setLogin } from '../redux/actions/userAction';
import ApiService from '../api/APIService';
import Search from '../components/Search';

export default function MeScreen({navigation}) {
  const {token} = useSelector(state=>state.userReducer);

  const dispatch = useDispatch();
  const deleteToken = new_token => dispatch(setToken(new_token));
  const deleteLogin = isLogin => dispatch(setLogin(isLogin));


  const onLogoutPressed = () => {
    postToLoginAPI(navigation);
  };

  const postToLoginAPI = (navigation) => {
    ApiService
      .post(API_URL+ '/users/logout', {
        token: token,
      })
      .then(function (response) {
        // handle success
        deleteToken('');
        deleteLogin('false');
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        });
      })
      .catch(function (error) {
        // handle error
        // do chưa có api logout để tạm như này
        deleteToken('');
        deleteLogin('false');
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        });
        return;

        setErr("Có lỗi xảy ra!");
      });
  };

  return (
    <View>
      <Search />
      <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: '#00bfff'}} onPress={onLogoutPressed}>
          <Text>Đăng xuất</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});