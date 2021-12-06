import { View, StyleSheet, Text, TouchableOpacity, Button, ViewBase } from "react-native";
import React,{useState,useEffect} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import FriendOnly from "./FriendOnly"
import {defaultColor} from '../styles';

function SearchRecently({listFriendSearch,handleRemove}){

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
                    return (
                    <View key ={item[0].id} style={styles.content}>
                        <TouchableOpacity style={styles.friendOnly}>
                            <FriendOnly name={item[0].partner.name} imageUri = {item[0].partner.imageUri} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleRemove(item[0].id)}>
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
