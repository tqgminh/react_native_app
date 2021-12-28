import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../styles";
import BackButton from "./BackButton";

export default function Search(props) {

    const [searchInput, setSearchInput] = useState('');
    const typeDisplay  = props.type
    const navigation = props.navigation
    return (
        <View style={styles.container}> 
            <TouchableOpacity>
                <MaterialIcons style={[styles.icon, {marginLeft: 20}]} name='search' size={30} color='white'/>
            </TouchableOpacity>
            <TextInput
                placeholder={"Tìm kiếm bạn bè, tin nhắn..."}
                style={styles.textInput}
                value={searchInput}
                onChangeText={(name)=>setSearchInput(name)}
                onFocus={()=> {
                    navigation.navigate('SearchDetailScreen')
                }}
                
            />
            <TouchableOpacity>
                {!typeDisplay && <MaterialIcons style={[styles.icon, {paddingRight: 10}]} name='qr-code' size={25} color='white'/>}
                {typeDisplay && <MaterialIcons style={[styles.icon, {paddingRight: 10}]} name='person-add' size={25} color='white'/>}

            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: defaultColor,
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
