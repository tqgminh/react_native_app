import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DiscoveryScreen() {
  return (
    <View style={styles.container}>
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