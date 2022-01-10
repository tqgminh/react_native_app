import { View, StyleSheet, Text, TouchableOpacity, Button, ViewBase } from "react-native";
import React,{useState,useEffect} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import FriendOnly from "./FriendOnly"
import {defaultColor} from '../styles';

function SearchRecently({listFriendSearch,handleRemove,navigation}){

    return (
        <View>
            <View style={styles.navigateInfo}>
                <Text style={styles.firstInfo}>Tìm kiếm gần đây</Text>
                <TouchableOpacity>
                    <MaterialIcons style={styles.secondeInfo} name='auto-fix-high' size={25} color='black'/>
                </TouchableOpacity>
            </View>
            {
                listFriendSearch.map(item =>{
                    item = item[0]
                    return (
                        
                    <View key ={item._id} style={styles.content}>
                        <TouchableOpacity style={styles.friendOnly} onPress={()=>navigation.navigate("OtherUserInfoScreen", { info: item })}>
                            <FriendOnly name={item.username} imageUri={item.avatar.fileName} item = {item}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleRemove(item.phonenumber)}>
                            <MaterialIcons style={styles.icon} name='highlight-remove' size={25} color={defaultColor} />
                        </TouchableOpacity>
                    </View>
                    )
                })
            }
        </View>

    )

}
export default SearchRecently

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
    },
    navigateInfo: {
        marginTop:5,
        flexDirection:'row',
        // justifyContent:'space-around'
    },
    firstInfo: {
        marginLeft:10
    },
    secondeInfo:{
        marginLeft:190
    },
    content:{
        flexDirection:'row',
        alignItems:'center'
        
    },
    friendOnly:{
        width:'80%'
    },
    icon:{
        marginLeft:20
    }
});
