import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button,Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {defaultColor} from '../styles';


function SuggestFriendItem(props){

    const {name, imageUri,iconActivate,description} = props
    return (

        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{ uri: imageUri }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            <View style={styles.devices}>
                <TouchableOpacity activeOpacity={0.5} style={styles.middle}>
                    <Text style={styles.addFriend}>Kết bạn</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <MaterialIcons style={[styles.icon, {paddingLeft: 10}]} name='highlight-remove' size={25} color={defaultColor} 
                        />
                </TouchableOpacity>
            </View>
        </View>

        
    )
}

export default SuggestFriendItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
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


