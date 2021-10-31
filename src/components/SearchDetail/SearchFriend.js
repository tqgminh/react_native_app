import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {ListPeople} from './data.js'

function SearchFriend({keySearch}){
    return (

        <View>
            <Text>Bạn bè</Text>
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