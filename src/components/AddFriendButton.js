import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";


const AddFriendButton = () => {

    const navigation = useNavigation();

    return (
        
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>TÌM BẠN BÈ</Text>
            </TouchableOpacity>
        
    )
}

export default AddFriendButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00bfff',
        marginLeft: '30%',
        marginRight: '30%',
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,     
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
})