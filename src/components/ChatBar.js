import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColor } from "../styles";

export default function ChatBar({ name, imageUri, navigation }) {

    const goBack = () => {
        navigation.goBack();
    }

    const moreOptions = () => {
        navigation.navigate('OptionsScreen', {name: name, imageUri: imageUri});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <MaterialIcons style={[styles.icon, {marginLeft: 20}]} name='arrow-back' size={30} color='white'/>
            </TouchableOpacity>
            <Text style={styles.textTitle}>{name}</Text>
            <MaterialIcons style={[styles.icon]} name='phone' size={25} color='white'/>
            <MaterialIcons style={[styles.icon]} name='videocam' size={25} color='white'/>
            <TouchableOpacity onPress={moreOptions}>
                <MaterialIcons style={[styles.icon]} name='info' size={25} color='white'/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: defaultColor,
        flexDirection: 'row',
    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 10,
        width: '53%',
    },
    icon: {
        marginTop: 40,
        marginHorizontal: 5,
    },
});
