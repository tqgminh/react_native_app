import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button, ScrollView } from 'react-native';
import BackButton from '../components/BackButton';
import { MaterialIcons, Feather, Foundation, EvilIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../api/config';
import * as FileSystem from 'expo-file-system';
import { convertBase64 } from '../helpers/Utils'; 

export default function AddPostScreen({ navigation, route }) {
    const { token, phone, username, isLogin } = useSelector(state => state.userReducer);
    const [described, setDescribed] = useState('');
    let photos = [];
    let count = 0;
    if (route.params) {
        photos = route.params.photos;
        count = route.params.count;
    }

    const OnPressPost = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        let base64Imgs = [];
        for (let i = 0; i < photos.length; i++) {
            let base64Img = await convertBase64(photos[i]);
            base64Imgs.push(base64Img);
        }


        const bodyParameters = {
            described: described,
            images: base64Imgs,
        };

        axios.post(
            API_URL + '/posts/create', bodyParameters, config
        )
            .then((response) => {
                //alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                //alert(error);
            });
    }

    const RenderImg = () => {
        if (count == 1) {
            return (
                <View style={{ justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                    <Image style={styles.image}
                        source={{ uri: photos[0].uri }}
                        key={count}>
                    </Image>
                </View>
            );
        } if (count == 2) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                    <View style={{ width: '50%' }}>
                        <Image style={styles.image}
                            source={{ uri: photos[0].uri }}
                            key={1}>
                        </Image>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Image style={styles.image}
                            source={{ uri: photos[1].uri }}
                            key={2}>
                        </Image>
                    </View>
                </View>
            );
        }
        if (count == 3) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                    <View style={{ width: '50%' }}>
                        <Image style={styles.image}
                            source={{ uri: photos[0].uri }}
                            key={1}>
                        </Image>
                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ width: '100%' }}>
                            <Image style={styles.image2}
                                source={{ uri: photos[1].uri }}
                                key={2}>
                            </Image>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Image style={styles.image2}
                                source={{ uri: photos[2].uri }}
                                key={3}>
                            </Image>
                        </View>

                    </View>
                </View>
            );
        }
        if (count == 4) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 20 }}>
                    <View style={{ width: '50%' }}>
                        <View style={{ width: '100%' }}>
                            <Image style={styles.image2}
                                source={{ uri: photos[0].uri }}
                                key={1}>
                            </Image>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Image style={styles.image2}
                                source={{ uri: photos[1].uri }}
                                key={2}>
                            </Image>
                        </View>

                    </View>
                    <View style={{ width: '50%' }}>
                        <View style={{ width: '100%' }}>
                            <Image style={styles.image2}
                                source={{ uri: photos[2].uri }}
                                key={3}>
                            </Image>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Image style={styles.image2}
                                source={{ uri: photos[3].uri }}
                                key={4}>
                            </Image>
                        </View>

                    </View>
                </View>
            );
        }
        else {
            return (<View></View>);
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.head}>
                <BackButton style={styles.back_btn} goBack={navigation.goBack} />
                <Text style={styles.text_head}>Tạo bài viết mới</Text>
                <TouchableOpacity style={styles.post_btn} onPress={OnPressPost}>
                    <Text style={styles.text_btn_post}>Đăng</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 10, paddingBottom: 20 }}>
                <ScrollView style={styles.main}>
                    <TextInput placeholder='bạn đang nghĩ gì?'
                        returnKeyType="done"
                        value={described}
                        multiline
                        onChangeText={(text) => setDescribed(text)}
                        style={styles.text_status}
                    />
                    <RenderImg />
                </ScrollView>
            </View>


            <View style={styles.footer}>
                <TouchableOpacity style={{ flexDirection: 'row', flex: 3 }}>
                    <MaterialIcons style={{ flex: 3 }} name="insert-emoticon" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => { navigation.navigate('ImageBrowserScreen'); }}>
                    <Feather style={{ flex: 1 }} name="image" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }} onPress={() => { navigation.navigate('ImageBrowserScreen'); }}>
                    <Foundation style={{ flex: 1 }} name="play-video" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
                    <Feather style={{ flex: 1 }} name="link" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', flex: 1 }}>
                    <EvilIcons style={{ flex: 1 }} name="location" size={24} color="black" />
                </TouchableOpacity>
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

    head: {
        backgroundColor: '#00bfff',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 20,
        height: 70,
        alignItems: 'center',
        height: 65
    },

    back_btn: {
        flex: 1
    },

    text_head: {
        flex: 4,
        color: "#fff",
        fontSize: 20
    },

    post_btn: {
        flex: 1,
    },

    main: {
        flex: 10
    },

    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(220,220,220)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    text_btn_post: {
        color: "#fff",
        fontSize: 20
    },


    image: {
        flex: 1,
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: "rgb(200,200,200)",
        borderRadius: 10,
        overflow: "hidden",
    },

    image2: {
        flex: 1,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: "rgb(200,200,200)",
        borderRadius: 10,
        overflow: "hidden",
    },

    text_status: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20
    }
});