import { useNavigation } from "@react-navigation/native";
import React,{useState,useEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SearchFriend from "../components/SearchDetail/SearchFriend";
import SearchFake from "../components/SearchDetail/SearchFake";
import {ListPeople} from '../components/SearchDetail/data'
import FriendItem from "../components/Contact/FriendItem";
import SearchRecently from "../components/SearchRecently";

function SearchDetail({navigation}){
    const [searchInput, setSearchInput] = useState('');
    const [arrFriend, setArrFriend] = useState([]);
    const [listFriendSearch, setlistFriendSearch] = useState([]);

    const hanleChangeValue = (event)=>{
        setSearchInput(event)
    }

    useEffect(()=>{
        const arrResult = ListPeople.filter(people=>{
            const arrComName = people.partner.name.split(' ')
            if(arrComName.includes(searchInput)){
                return 1
            }
            return 0
        })
        setArrFriend(arrResult)

    },[searchInput])


    
    const handleGetSearchFriend = (friendId)=>{

        if(!listFriendSearch.find(people=>people[0].id == friendId)){
            let getFriend = arrFriend.filter(people=>people.id== friendId)
            setlistFriendSearch(prev =>[...prev,getFriend])
        }
    }





    return (

        <View>
            <SearchFake navigation={navigation} searchInput={searchInput} hanleChangeValue = {hanleChangeValue}/>
            {
                searchInput!=0&&<Text style={{marginTop:5}}>Liên hệ</Text>

            }
            {
                arrFriend.length!=0 && <View>
                {
                    arrFriend.map(item =>{
                        return (
                        <TouchableOpacity key ={item.id} onPress={()=>handleGetSearchFriend(item.id)}>
                            <FriendItem name={item.partner.name} imageUri = {item.partner.imageUri} iconActivate={1} />
                        </TouchableOpacity>
                        )
                    })
                }
            </View>
            }
            {
                searchInput==''&& <SearchRecently listFriendSearch={listFriendSearch}/>
            }
        </View>
    )
}

export default SearchDetail;

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