import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button,Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {defaultColor} from '../../styles';


function FriendItem(props){

    const {name, imageUri,iconActivate} = props
    return (

        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{ uri: imageUri }} style={styles.avatar} />
                {iconActivate && <View style={styles.iconActivate}/>}
                {!iconActivate && <View style={styles.iconInActivate}/>}
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{name}</Text>
                </View>
            </View>
            <View style={styles.devices}>
                <TouchableOpacity onPress={()=>console.log('call')} >
                    <MaterialIcons style={[styles.icon, {paddingLeft: 10}]} name='call' size={20} color={defaultColor} 
                        />
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=>console.log('call')} >
                    <MaterialIcons style={[styles.icon, {paddingLeft: 10}]} name='video-call' size={20} color={defaultColor} 
                        />
                </TouchableOpacity>
            </View>
        </View>

        
    )
}

export default FriendItem;

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
        width:'20%',
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
    }
})


