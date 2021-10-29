import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Search() {

    const [searchInput, setSearchInput] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialIcons style={[styles.icon, {marginLeft: 20}]} name='search' size={30} color='white'/>
            </TouchableOpacity>
            <TextInput
                placeholder={"Tìm kiếm bạn bè, tin nhắn..."}
                style={styles.textInput}
                value={searchInput}
                onChangeText={setSearchInput}
            />
            <TouchableOpacity>
                <MaterialIcons style={[styles.icon, {paddingRight: 10}]} name='qr-code' size={25} color='white'/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#00bfff',
        flexDirection: 'row',
    },
    textInput: {
        marginTop: 30,
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginTop: 40,
        marginHorizontal: 5,
    },
});
