import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";


const NewMessageButton = () => {

    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialCommunityIcons name='message-reply-text' size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00bfff',
        width: 60,
        height: 60,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
})