import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {defaultColor} from '../../styles'


function UpdateFriend(){


    return (

        <View style={styles.container}>
           <Text style={styles.title}>Nhanh chóng thêm bạn vào Zalo từ danh bạ điện thoại</Text>
           <TouchableOpacity activeOpacity={0.5} style={styles.middle}>
                <Text style={styles.text}>TÌM BẠN BÈ</Text>
           </TouchableOpacity>
        </View>
        
    )
}

export default UpdateFriend;

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:5 ,
        borderBottomColor: '#DCDCDC',
        paddingBottom: '5%'

    },
    middle:{
        
        backgroundColor: defaultColor,
        marginLeft: '30%',
        marginRight: '30%',
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,     

    },
    text:{
        marginHorizontal:20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        
    },
    title:{
        marginTop:5,
        marginHorizontal:'10%',
        textAlign:'center'
    }
})