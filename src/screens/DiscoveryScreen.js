import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from '../components/Search';

export default function DiscoveryScreen({navigation}) {
  return (
    <View>
      <Search navigation = {navigation} />
      <Text>khám phá</Text>
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