import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import TitleBar from '../components/TitleBar';
import NotifiBar from '../components/NotifiBar';
import { defaultColor } from '../styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { passwordValidator } from '../helpers/passwordValidator';
import ApiService from '../api/APIService';
import { API_URL } from '../api/config';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { setToken } from '../redux/actions/userAction';



export default function UpdatePasswordScreen({ navigation }) {
    const dispatch = useDispatch();
    const addToken = new_token => dispatch(setToken(new_token));
    const { token, phone, username, isLogin } = useSelector(state => state.userReducer);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const [err3, setErr3] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [nameHidePassword, setNameHidePassword] = useState('eye');

    const PressUpdatePassword=()=>{
        /* showMessage({
            title: 'Login success!',
            message: 'Will show this message green',
            type: 'success',
          }); */
        const currentPasswordError = passwordValidator(currentPassword);
        if (currentPasswordError) {
            setErr1(currentPasswordError);
            return;
        }
        setErr1("");
        const newPasswordError = passwordValidator(newPassword);
        if (newPasswordError) {
            setErr2(newPasswordError);
            return;
        }
        if(newPassword==currentPassword){
            setErr2("Mật khẩu không thay đổi!");
            return;
        }
        setErr2("");
        if (newPassword != confirmNewPassword) {
            setErr3('Xác thực mật khẩu sai!');
            return;
        }
        setErr3("");

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        const bodyParameters = {
            currentPassword: currentPassword,
            newPassword: newPassword
        };

          axios.post( 
            API_URL+ '/users/change-password', bodyParameters, config
            )
            .then( ( response ) => {
                addToken(response.data.token);
                showMessage({
                    title: 'Update password success!',
                    message: 'Cập nhật mật khẩu thành công!',
                    type: 'success',
                  });
                navigation.navigate("AccAndSecScreen");
            } )
            .catch(function (error) {
                if(error.response.data.code=="CURRENT_PASSWORD_INCORRECT"){
                    setErr1("Mật khẩu hiện tại không đúng!");
                    showMessage({
                        title: 'Update password fail!',
                        message: 'Mật khẩu hiện tại không đúng!',
                        type: 'danger',
                      });
                      return;
                }
                showMessage({
                    title: 'Update password fail!',
                    message: 'Có lỗi xảy ra vui lòng thử lại!',
                    type: 'danger',
                  });
              });
    }

    const showHidePassword = () => {
        if (hidePassword) {
            setNameHidePassword('eye-off');
        } else {
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
            <TitleBar navigation={navigation} data={{ text: 'Cập nhật mật khẩu' }} />
            <NotifiBar text='Mật khẩu từ 6 đến 10 ký tự.' />

            <Text style={{ marginTop: 20, fontSize: 20, color: defaultColor, marginLeft: 10 }}>Mật khẩu hiện tại:</Text>
            <View style={[styles.main, { marginTop: 5 }]}>
                <TextInput
                    label='current_password'
                    placeholder='Nhập mật khẩu hiện tại'
                    style={styles.input}
                    returnKeyType="done"
                    value={currentPassword}
                    onChangeText={(text) => setCurrentPassword(text)}
                    secureTextEntry={hidePassword}
                />
                <PasswordDisplay data={{ nameIcon: nameHidePassword, color: defaultColor }} />
            </View>
            <Text style={styles.text_err}>{err1}</Text>

            <Text style={{ marginTop: 20, fontSize: 20, color: defaultColor, marginLeft: 10 }}>Mật khẩu mới:</Text>
            <View style={[styles.main, { marginTop: 5 }]}>
                <TextInput
                    label='new_password'
                    placeholder='Nhập mật khẩu mới'
                    style={styles.input}
                    returnKeyType="done"
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                    secureTextEntry={hidePassword}
                />
            </View>
            <Text style={styles.text_err}>{err2}</Text>

            <View style={[styles.main, { marginTop: 20 }]}>
                <TextInput
                    label='comfirm_new_password'
                    placeholder='Nhập lại mật khẩu mới'
                    style={styles.input}
                    returnKeyType="done"
                    value={confirmNewPassword}
                    onChangeText={(text) => setConfirmNewPassword(text)}
                    secureTextEntry={hidePassword}
                />
            </View>
            <Text style={styles.text_err}>{err3}</Text>

            <View style={{marginLeft: 100, marginRight: 100}}>
            <TouchableOpacity onPress={PressUpdatePassword}
                style={styles.btn}>
                <Text style={styles.title_btn}>CẬP NHẬT</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },

    main: {
        alignItems: 'center',
        flexDirection: "row",
        marginLeft: 10
    },

    input: {
        width: '95%',
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    text_err: {
        color: 'red',
        paddingLeft: 10
    },

    btn: {
        marginTop: 30,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: defaultColor,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
      },
      title_btn: {
        color: 'white',
        fontSize: 17,
        //marginRight: 60,
       // marginLeft: 60,
        textAlign: 'center',
      },
    
});