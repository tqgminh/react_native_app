import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SearchFriend from "../components/SearchDetail/SearchFriend";
import SearchFake from "../components/SearchDetail/SearchFake";
import { ListPeople } from '../components/SearchDetail/data'
import FriendItem from "../components/Contact/FriendItem";
import SearchRecently from "../components/SearchRecently";
import { searchUser } from "../redux/actions/userAction";
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

function SearchDetail({ navigation }) {
    const { token, phone, username, isLogin, avatar, id, blocks, listPosts } = useSelector(
        (state) => state.userReducer
    );
    console.log(phone)
    const [searchInput, setSearchInput] = useState('');
    const [arrFriend, setArrFriend] = useState([]);
    const [listFriendSearch, setlistFriendSearch] = useState([]);

    const hanleChangeValue = (event) => {
        setSearchInput(event)
    }
    console.log(searchInput,arrFriend)

    useEffect(() => {
        searchUser({ token, searchInput })
            .then(res => {
                if (res.success) {
                    setArrFriend(res.data.data);
                } else {
                    showMessage({
                        title: "search user fail!",
                        message: "Có lỗi xảy ra vui lòng thử lại!",
                        type: "fail",
                        position: "center"
                    });
                }
            })
    }, [searchInput]);



    const handleGetSearchFriend = (phonenumber) => {

        if (!listFriendSearch.find(people => people[0].phonenumber == phonenumber)) {
            let getFriend = arrFriend.filter(people => people.phonenumber == phonenumber)
            setlistFriendSearch(prev => [...prev, getFriend])
        }
    }

    const handleRemove = function (phonenumber) {
        setlistFriendSearch(listFriendSearch.filter(people => people[0].phonenumber != phonenumber))
    }

    const userPress = ({ item }) => {
        navigation.navigate("OtherUserInfoScreen", { info: item });
    }

    const renderUser = ({ item }) => {
        return (
            <View>
                {blocks.indexOf(item._id) == -1 && 
            <TouchableOpacity onPress={()=>{
                handleGetSearchFriend(item.phonenumber)
                navigation.navigate("OtherUserInfoScreen", { info: item });
            }}>
                <FriendItem item={item} iconActivate={1} />
            </TouchableOpacity>}
            </View>
        )
    }




    return (

        <View>
            <SearchFake navigation={navigation} searchInput={searchInput} hanleChangeValue={hanleChangeValue} />
            {
                searchInput != 0 && <Text style={{ marginTop: 5 }}>Liên hệ</Text>

            }

            {searchInput !="" &&
            <FlatList nestedScrollEnabled
                style={{ height: "100%" }}
                LisHeaderComponent={
                    <>
                    </>}
                extraData={arrFriend}
                data={arrFriend}
                renderItem={renderUser}
                keyExtractor={item => item._id}
                ListFooterComponent={<>
                </>} />}


            {
                searchInput==''&& listFriendSearch.length!==0 && <SearchRecently listFriendSearch={listFriendSearch} navigation={navigation} handleRemove={handleRemove}/>
            }
        </View>
    )
}

export default SearchDetail;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 5,
        borderBottomColor: '#DCDCDC'

    },
    view: {
        width: '100%',
        height: 50,
        flexDirection: 'row',

        alignItems: 'center',
    },
    icon: {
        // backgroundColor:'blue'
    },
    text: {
        marginHorizontal: 20,
        fontSize: 20,

    }
})