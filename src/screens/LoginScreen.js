import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import ApiService from '../api/APIService';
import { defaultColor } from '../styles';
import { phoneValidator } from '../helpers/phoneValidator'
import { passwordValidator } from '../helpers/passwordValidator';
import TitleBar from '../components/TitleBar';
import NotifiBar from '../components/NotifiBar';
import { API_URL } from '../api/config';
import { setToken, setNumberPhone, setUsername, setLogin, login } from '../redux/actions/userAction';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';


export default function LoginScreen({ navigation }) {
  //const { phone } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [spinner, setSpinner] = useState(false);
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [err, setErr] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [nameHidePassword, setNameHidePassword] = useState('eye');

  const onLoginPressed = async () => {
    const phoneError = phoneValidator(phone.value)
    const passwordError = passwordValidator(password.value)
    if (phoneError || passwordError) {
      setPhone({ ...phone, error: phoneError })
      setPassword({ ...password, error: passwordError })
      return;
    }

    const data= {phone: phone.value, password: password.value}

    setSpinner(true);
    const rs = await login(data, dispatch);
    setSpinner(false);
    if(rs.success){
      return;
    }else{
      if(rs.error.message=='Username or password incorrect')
        setErr("Số điện thoại hoặc mật khẩu không đúng!");
      else
      setErr("Có lỗi xảy ra vui lòng thử lại!");
    }
  };

  const showHidePassword = () => {
    if(hidePassword){
      setNameHidePassword('eye-off');
    }else{
      setNameHidePassword('eye');
    }
    setHidePassword(!hidePassword);
    
  }
  const PasswordDisplay = ({ data }) => {
    return (
    <TouchableOpacity style={{ marginLeft: -30 }} onPress={showHidePassword}>
      <Feather name={data.nameIcon} size={24} color={data.color} />
    </TouchableOpacity>
    );

  }

  return (
    <View style={styles.container}>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <TitleBar navigation={navigation} data={{text: 'Đăng nhập'}} />

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
          secureTextEntry={hidePassword}
        />
        <PasswordDisplay data={{ nameIcon:nameHidePassword, color: defaultColor }} />
      </View>
      <Text style={styles.text_err}>{password.error}</Text>
      <Text style={styles.text_err}>{err}</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '80%' }}></View>
        <View style={styles.btn_login}>
          <TouchableOpacity mode="contained" onPress={onLoginPressed}>
            <AntDesign name="rightcircle" size={50} color={defaultColor} />
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

  main: {
    alignItems: 'center',
    flexDirection: "row"
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
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
});