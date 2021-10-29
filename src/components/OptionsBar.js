import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function OptionsBar({ navigation }) {

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <MaterialIcons style={[styles.icon, {marginLeft: 20}]} name='arrow-back' size={30} color='white'/>
            </TouchableOpacity>
            <Text style={styles.textTitle}>Tùy chọn</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#00bfff',
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
