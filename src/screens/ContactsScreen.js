import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Search from '../components/Search';
import RequestFriend from '../components/Contact/RequestFriend';
import ActiveFriend from '../components/Contact/ActiveFriend';
import UpdateFriend from '../components/Contact/UpdateFriend';

export default function ContactsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Search type={1} navigation = {navigation} />
      <ScrollView>
        <RequestFriend />
        <ActiveFriend navigation = {navigation}/>
        <UpdateFriend/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
    marginBottom:'20%'
  }
});