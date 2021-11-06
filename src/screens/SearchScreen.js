import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../styles";
import BackButton from "../components/BackButton";

export default function SearchScreen(props) {

    const [searchInput, setSearchInput] = useState('');
    const navigation = props.navigation
    return (
        <View style={styles.container}>
            <View style={{ paddingLeft: 20, flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <BackButton goBack={navigation.goBack} />
                <View style={{ backgroundColor: '#fff', flexDirection: 'row', width: '75%', marginLeft: 10, height: 40, alignItems: 'center' }}>
                    <MaterialIcons style={[styles.icon, { marginLeft: 10 }]} name='search' size={20} color='black' />
                    <TextInput
                        placeholder={"Tìm kiếm bạn bè, tin nhắn..."}
                        style={styles.textInput}
                        value={searchInput}
                        onChangeText={(name) => setSearchInput(name)}
                    />
                </View>

                <TouchableOpacity>
                    <MaterialIcons style={[styles.icon, { paddingRight: 10 }]} name='qr-code' size={25} color='white' />
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
    textInput: {
        backgroundColor: 'white',
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
});
