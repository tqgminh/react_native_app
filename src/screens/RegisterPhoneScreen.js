import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import NotifiBar from '../components/NotifiBar';
import TitleBar from '../components/TitleBar';
import { AntDesign } from '@expo/vector-icons';
import { API_URL } from '../api/config';
import { defaultColor } from '../styles';
import axios from 'axios';
import { phoneValidator } from '../helpers/phoneValidator';
import Spinner from 'react-native-loading-spinner-overlay';


export default function RegisterPhoneScreen({ navigation, route }) {
    const name = route.params.name;
    const [spinner, setSpinner] = useState(false);
    const [phone, setPhone] = useState({ value: '', error: '' });

    const onLoginPressed = () => {
        const phoneError = phoneValidator(phone.value)
        if (phoneError) {
            setPhone({ ...phone, error: phoneError })
            return;
        }
        postToLoginAPI(navigation);
    };

    const postToLoginAPI = (navigation) => {
        setSpinner(true);
        axios
            .post(API_URL + '/users/register', {
                phonenumber: phone.value,
            })
            .then(function (response) {
                setSpinner(false);
            })
            .catch(function (error) {
                setSpinner(false);
                // handle error
                //alert(JSON.stringify(error.response.data));
                if (JSON.stringify(error.response.data) == '{"message":"Phone number already exists"}')
                    setPhone({ ...phone, error: 'Số điện thoại này đã đăng ký tài khoản!' });
                else if (JSON.stringify(error.response.data) == '{"message":"data and salt arguments required"}') {
                    navigation.navigate('RegisterPasswordScreen', {
                        name: name,
                        phone: phone.value,
                    });
                } else {
                    setPhone({ ...phone, error: 'Có lỗi xảy ra vui lòng thử lại!' });
                }
            });
    };

    return (
        <View style={styles.container}>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
            />
            <TitleBar navigation={navigation} data={{ text: 'Tạo tài khoản' }} />

            <NotifiBar text='Nhập số điện thoại của bạn để tạo tài khoản mới.' />

            <View style={styles.main}>
                <TextInput
                    label='phone'
                    placeholder="Số điện thoại"
                    style={styles.input}
                    keyboardType="numeric"
                    returnKeyType="next"
                    value={phone.value}
                    onChangeText={(text) => setPhone({ value: text, error: '' })}
                />
            </View>

            <Text style={styles.text_err}>{phone.error}</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '80%' }}></View>
                <View style={styles.btn}>
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
        // alignItems: 'center',
        // justifyContent: 'center'
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
    },
    spinnerTextStyle: {
        color: '#FFF'
      },
});