import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button,Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {defaultColor} from '../styles';


function FriendOnly(props){

    const {name, imageUri,item} = props
    // console.log("item",item)
    return (

        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{ uri: imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{name}</Text>
                </View>
            </View>
        </View>

        
    )
}

export default FriendOnly;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
    },
    devices:{
        flexDirection: 'row',
        alignItems:'center',
        width:'35%',
        justifyContent: "space-between",
        marginRight:10
    },
    lefContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 15,
        borderRadius: 50,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        left:-5
    },
    description:{
        left:-5

    },
    status: {
        fontSize: 16,
        color: 'grey',
    },
    time: {
        fontSize: 14,
        color: 'grey',
    },
    iconActivate:{
        width: 12,
        height: 12,
        backgroundColor:'green',
        borderRadius:6,
        left:-20,
        bottom:-40,
    },
    iconInActivate:{
        width: 12,
        height: 12,
        // backgroundColor:'green',
        borderRadius:6,
        left:-20,
        bottom:-40,
    },
    middle:{
        
        backgroundColor: defaultColor,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center', 

    },
    addFriend:{
        marginHorizontal:20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        
    }
})


