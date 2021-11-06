import React, { useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../../styles";

export default function SearchFake(props) {

    // const [searchInput, setSearchInput] = useState('');
    const typeDisplay  = props.type
    const {navigation} = props

    // callback get search
    const {searchInput,hanleChangeValue} = props


    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} >
                <MaterialIcons style={[styles.icon, {marginLeft: 10}]} name='arrow-back' size={30} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons style={[styles.icon, {marginLeft: 5}]} name='search' size={30} color='white'/>
            </TouchableOpacity>
            <TextInput
                placeholder={"Tìm kiếm bạn bè, tin nhắn..."}
                style={styles.textInput}
                value={searchInput}
                onChangeText={name=>hanleChangeValue(name)}        
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
