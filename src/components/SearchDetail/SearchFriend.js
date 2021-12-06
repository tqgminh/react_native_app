import { useNavigation } from "@react-navigation/native";
import React,{ useState}  from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {ListPeople} from './data.js'
import FriendItem from "../Contact/FriendItem.js";

function SearchFriend({arrFriend}){
    const [listFriendSearch, setlistFriendSearch] = useState([]);

    const handleGetSearchFriend = function(friendId){
        let getFriend = arrFriend.filter(people=>people.id== friendId)
        // setlistFriendSearch(getFriend)
        console.log('nkm')

    }

    return (

        <View>
            <Text>Liên hệ</Text>
            {
                arrFriend.map(item =>{
                    return (
                    <TouchableOpacity key ={item.id} onPress={()=>handleGetSearchFriend(item.id)} >
                        <FriendItem name={item.partner.name} imageUri = {item.partner.imageUri} iconActivate={1} />
                    </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default SearchFriend;

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:5 ,
        borderBottomColor: '#DCDCDC'

    },
    view: {
        width: '100%',
        height: 50,
        flexDirection: 'row',

        alignItems:'center',
    },
    icon: {
        // backgroundColor:'blue'
    },
    text:{
        marginHorizontal:20,
        fontSize:20,
        
    }
})