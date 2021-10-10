import React from "react";
import { Text, View, StyleSheet} from "react-native";


export default function TitleBar({text}) {
    return (
        <View>
            <Text style={styles.text_title}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    text_title: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 20
  },
});
