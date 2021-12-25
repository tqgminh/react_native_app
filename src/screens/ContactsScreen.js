import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Search from "../components/Search";
import RequestFriend from "../components/Contact/RequestFriend";
import ActiveFriend from "../components/Contact/ActiveFriend";
import UpdateFriend from "../components/Contact/UpdateFriend";
import SuggestFriend from "../components/SuggestFriend"

export default function ContactsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Search type={1} navigation={navigation} />
      <SafeAreaView>
        <RequestFriend navigation={navigation} />
        <SuggestFriend navigation={navigation}/>
        <ActiveFriend navigation={navigation} />
        <UpdateFriend />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center'
    marginBottom: "20%",
  },
});
