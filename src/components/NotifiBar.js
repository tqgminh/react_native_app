
import React from "react";
import { Text, View, StyleSheet} from "react-native";


export default function NotifiBar({text}) {
    return (
        <View style={styles.notifi}>
        <Text>{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    notifi: {
        paddingLeft: 10,
        backgroundColor: 'rgba(220, 220, 220, 0.5)',
        height: 40,
        justifyContent: 'center'
      },
    
});
