import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from '../components/Search';

export default function TimelineScreen({navigation}) {
  return (
    <View>
      <Search />
      <Text>Time</Text>
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