import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import TitleBar from '../components/TitleBar';
import { defaultColor } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../api/config';
import { setToken, setLogin } from '../redux/actions/userAction';
import ApiService from '../api/APIService';

export default function AccAndSecScreen({ navigation }) {

    const { token } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const deleteToken = new_token => dispatch(setToken(new_token));
    const deleteLogin = isLogin => dispatch(setLogin(isLogin));


    const LogoutPress = () => {
        LogoutAPI(navigation);
    };

    const LogoutAPI = (navigation) => {
        ApiService
            .post(API_URL + '/users/logout', {
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


    const ChangePhonePress = () => {
        //navigation.navigate(screen);
    }

    const ChangePasswordPress = () => {
        navigation.navigate("ChangePasswordScreen");
    }


    const BlockComponent = ({ data }) => {
        return (
            <TouchableOpacity style={styles.block} onPress={data.funcPress}>
                <Text style={styles.text_block}>{data.text}</Text>
            </TouchableOpacity>

        );
    };
    return (
        <View style={styles.container}>
                <TitleBar navigation ={navigation} data={{text:'Tài khoản và bảo mật'}}/>
            <View>
                <Text style={{ backgroundColor: "#fff", color: defaultColor, fontSize: 18, padding: 10 }}>Tài Khoản</Text>
                <BlockComponent data={{ text: "Đổi số điện thoại", funcPress: ChangePhonePress }} />
            </View>
            <BlockComponent data={{ text: "Đổi mật khẩu", funcPress: ChangePasswordPress }} />
            <View style={{ paddingTop: 7 }}>
                <BlockComponent data={{ text: "Đăng xuất", funcPress: LogoutPress }} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(240,240,240)',
    },
    title: {
        backgroundColor: '#00bfff',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 20,
        height: 70,
        alignItems: 'center',

    },

    block: {
        padding: 10,
        backgroundColor: "#fff",
        marginTop: 2
    },

    text_block: {
        fontSize: 17,

    },
});