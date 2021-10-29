import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const Inbox = () => {

    const [message, setMessage] = useState('');

    const onMircophonePress = () => {
        console.warn("Microphone")
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`);
        setMessage('');
    }

    const onPress = () => {
        if(!message) {
            onMircophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message
                    ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                    : <MaterialIcons name="send" size={28} color="white" />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Inbox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
        flex: 1, 
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#00bfff',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 5,
    }
})