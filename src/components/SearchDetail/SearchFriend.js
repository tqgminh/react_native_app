import { useNavigation } from "@react-navigation/native";
import React,{ useState}  from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {ListPeople} from './data.js'

function SearchFriend({keySearch}){
    const arrResult = ListPeople.filter(people=>{
        const arrComName = people.partner.name.split(' ')
        if(arrComName.includes(keySearch)){
            return 1
        }
        return 0
    })

    let result
    if(arrResult.length!=0)
        result = arrResult[0].partner.name

    return (

        <View>
            <Text>Bạn bè</Text>
            <Text>{result}</Text>
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