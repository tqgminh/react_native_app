import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { defaultColor } from '../styles';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.above}>
        <Text style={{ fontSize: 100, color: defaultColor, textAlign: 'center' }}>Zalo</Text>
      </View>

      <View style={styles.between}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}
          style={styles.btn_login}>
          <Text style={styles.title_btn}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RegisterNameScreen')}
          style={styles.btn_resgiter}>
          <Text style={styles.title_btn}>ĐĂNG kÝ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.below}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  above: {
    width: '100%',
    height: '65%',
    justifyContent: 'center'

  },

  btn_login: {
    marginTop: 30,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: defaultColor,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },

  btn_resgiter: {
    marginTop: 10,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: '#dcdcdc',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },

  title_btn: {
    color: 'white',
    fontSize: 17,
    marginRight: 60,
    marginLeft: 60,
    textAlign: 'center',
  },


  between: {
    height: '25%',
    flex: 1
  },

  below: {
    width: '100%',
    height: '10%'
  }

});