import { View, StyleSheet, Text, TouchableOpacity, Button, ViewBase } from "react-native";
import React,{useState,useEffect} from "react";
import FriendItem from "./Contact/FriendItem";
import { MaterialIcons } from "@expo/vector-icons";

function SearchRecently({listFriendSearch}){

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
                    <TouchableOpacity key ={item[0].id}>
                        <FriendItem name={item[0].partner.name} imageUri = {item[0].partner.imageUri} iconActivate={1} />
                    </TouchableOpacity>
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
    }
});
