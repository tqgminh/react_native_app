import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../styles";
import BackButton from "./BackButton";

export default function SuggestFriendHeader(props) {

    const [searchInput, setSearchInput] = useState('');
    const navigation = props.navigation
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton goBack={navigation.goBack} />
                <Text style={styles.textView}>Có thể bạn quen</Text>

                <TouchableOpacity style={styles.iconView}>
                    <MaterialIcons style={[styles.icon, { paddingRight: 10 }]} name='brightness-6' size={25} color='white' />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: '100%',
        height: 80,
        backgroundColor: defaultColor,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    header: {
        paddingLeft: 20, 
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center',
    },
    textView:{
        fontSize:18,
        marginLeft: 15
    },
    icon: {
        marginHorizontal: 5,
        marginLeft: 115
    },
});
