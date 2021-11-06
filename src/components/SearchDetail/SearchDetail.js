import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SearchFriend from "./SearchFriend";
import SearchMessages from "./SearchMessages";
import SearchFake from "./SearchFake";

function SearchDetail({navigation}){
    const [searchInput, setSearchInput] = useState('');

    const hanleChangeValue = (event)=>{
        setSearchInput(event)
    }
    return (

        <View>
            <SearchFake navigation={navigation} searchInput={searchInput} hanleChangeValue = {hanleChangeValue}/>
            <SearchFriend keySearch={searchInput}/>
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