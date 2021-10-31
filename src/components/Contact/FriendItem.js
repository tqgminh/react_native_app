import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button,Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


function FriendItem(props){

    const {name, imageUri} = props
    return (

        <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{name}</Text>
                    </View>
                </View>
                <View style={styles.devices}>
                    <MaterialIcons style={[styles.icon, {paddingLeft: 10}]} name='call' size={20} color='blue'/>
                    <MaterialIcons style={[styles.icon, {paddingLeft: 10}]} name='video-call' size={20} color='blue'/>
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
    },
    status: {
        fontSize: 16,
        color: 'grey',
    },
    time: {
        fontSize: 14,
        color: 'grey',
    }
})


