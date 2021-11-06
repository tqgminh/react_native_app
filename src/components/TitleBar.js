import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import { defaultColor } from "../styles";

export default function TitleBar(props) {
    return (
        <View style={styles.title}>
            <BackButton goBack={props.navigation.goBack} />
            <View>
                <Text style={styles.text_title}>{props.data.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: defaultColor,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 20,
        height: 70,
        alignItems: 'center',
    },

    text_title: {
        color: 'white',
        fontSize: 20,
        paddingLeft: 20
    },
});
