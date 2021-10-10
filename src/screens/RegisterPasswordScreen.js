import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import NotifiBar from '../components/NotifiBar';
import TitleBar from '../components/TitleBar';
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../api/config';
import ApiService from '../api/APIService';
import { setToken, setNumberPhone, setUsername, setLogin } from '../redux/actions/userAction';
import { useSelector, useDispatch } from 'react-redux';

import { passwordValidator } from '../helpers/passwordValidator';

export default function RegisterPasswordScreen({ navigation, route }) {
    const dispatch = useDispatch();

    const addToken = new_token => dispatch(setToken(new_token));
    const addPhone = new_phone => dispatch(setNumberPhone(new_phone));
    const addUsername = new_username => dispatch(setUsername(new_username));
    const addLogin = isLogin => dispatch(setLogin(isLogin));

    const name = route.params.name;
    const phone = route.params.phone;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');

    const onLoginPressed = () => {
        const passwordError = passwordValidator(password);
        if (passwordError) {
            setErr(passwordError);
            return;
        }
        if (password != confirmPassword) {
            setErr('Xác thực mật khẩu sai!');
            return;
        }

        postToLoginAPI(navigation);
    };

    const postToLoginAPI = (navigation) => {
        ApiService
            .post(API_URL + '/users/register', {
                phonenumber: phone,
                password: password,
                username: name,

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
                setErr('Có lỗi xảy ra vui lòng thử lại!');
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <BackButton goBack={navigation.goBack} />
                <TitleBar text='Tạo tài khoản' />
            </View>

            <NotifiBar text='Nhập mật khẩu của bạn.' />

            <View style={styles.main}>
                <TextInput
                    label='password'
                    placeholder='Mật khẩu'
                    style={styles.input}
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.main}>
                <TextInput
                    label='confirmPassword'
                    placeholder='Nhập lại mật khẩu'
                    style={styles.input}
                    returnKeyType="done"
                    value={password.value2}
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry
                />
            </View>

            <Text style={styles.text_err}>{err}</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '80%' }}></View>
                <View style={styles.btn}>
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
        // alignItems: 'center',
        // justifyContent: 'center'
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

    input: {
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

    btn: {
        width: 50,
        height: 50
    }
});