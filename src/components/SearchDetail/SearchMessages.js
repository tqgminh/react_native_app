import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


function SearchMessages(){

    return (

        <View>
            <Text>Bạn bè</Text>
        </View>
    )
}

export default SearchMessages;

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