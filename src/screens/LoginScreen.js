import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BackButton from '../components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import ApiService from '../api/APIService';

import { phoneValidator } from '../helpers/phoneValidator'
import { passwordValidator } from '../helpers/passwordValidator';
import TitleBar from '../components/TitleBar';
import NotifiBar from '../components/NotifiBar';
import { API_URL } from '../api/config';
import { setToken, setNumberPhone, setUsername,setLogin } from '../redux/actions/userAction';
import { useSelector, useDispatch } from 'react-redux';


export default function LoginScreen({ navigation }) {
  //const { phone } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const addToken = new_token => dispatch(setToken(new_token));
  const addPhone = new_phone => dispatch(setNumberPhone(new_phone));
  const addUsername = new_username => dispatch(setUsername(new_username));
  const addLogin = isLogin => dispatch(setLogin(isLogin));

  const [phone, setPhone] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [err, setErr] = useState('');

  const onLoginPressed = () => {
    const phoneError = phoneValidator(phone.value)
    const passwordError = passwordValidator(password.value)
    if (phoneError || passwordError) {
      setPhone({ ...phone, error: phoneError })
      setPassword({ ...password, error: passwordError })
      return;
    }
    postToLoginAPI(navigation);
  };

  const postToLoginAPI = (navigation) => {
    ApiService
      .post(API_URL+ '/users/login', {
        phonenumber: phone.value,
        password: password.value,
      })
      .then(function (response) {
        // handle success
        addToken(response.data.token);
        addPhone(response.data.data.phonenumber);
        addUsername(response.data.data.username);
        addLogin('true');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch(function (error) {
        // handle error
        alert(JSON.stringify(error));
        setErr("Số điện thoại hoặc mật khẩu không đúng!");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <BackButton goBack={navigation.goBack} />
        <TitleBar text='Đăng nhập' />
      </View>

      <NotifiBar text='Vui lòng nhập số điện thoại và mật khẩu để đăng nhập' />

      <View style={styles.main}>
        <TextInput
          label='phone'
          placeholder="Số điện thoại"
          keyboardType="numeric"
          style={styles.phone_input}
          returnKeyType="next"
          value={phone.value}
          //defaultValue={phone}
          onChangeText={(text) => setPhone({ value: text, error: '' })}
        />
      </View>
      <Text style={styles.text_err}>{phone.error}</Text>

      <View style={styles.main}>
        <TextInput
          label='password'
          placeholder='Mật khẩu'
          style={styles.password_input}
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          secureTextEntry
        />

      </View>
      <Text style={styles.text_err}>{password.error}</Text>
      <Text style={styles.text_err}>{err}</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '80%' }}></View>
        <View style={styles.btn_login}>
          <TouchableOpacity mode="contained" onPress={onLoginPressed}>
            <AntDesign name="rightcircle" size={50} color="#00bfff" />
          </TouchableOpacity>
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center'
  },

  title: {
    backgroundColor: '#00bfff',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 20,
    height: 70,
    alignItems: 'center',

  },


  main: {
    alignItems: 'center'
  },

  phone_input: {
    //backgroundColor: '#ffe4b5',
    width: '95%',
    marginTop: 30,
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  password_input: {
    //backgroundColor: '#ffe4b5',
    width: '95%',
    marginTop: 30,
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },

  text_err: {
    color: 'red',
    paddingLeft: 10
  },

  btn_login: {
    width: 50,
    height: 50
  }
});