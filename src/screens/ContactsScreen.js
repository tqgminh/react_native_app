import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Search from '../components/Search';
import RequestFriend from '../components/Contact/RequestFriend';
import ActiveFriend from '../components/Contact/ActiveFriend';

export default function ContactsScreen({navigation}) {
  return (
    <View>
      <Search type={1} navigation = {navigation} />
      <ScrollView>
        <RequestFriend />
        <ActiveFriend navigation = {navigation}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});