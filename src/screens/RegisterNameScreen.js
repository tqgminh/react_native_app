import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import NotifiBar from '../components/NotifiBar';
import TitleBar from '../components/TitleBar';
import { AntDesign } from '@expo/vector-icons';

import { nameValidator } from '../helpers/nameValidator';

export default function RegisterNameScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });

  const onLoginPressed = () => {
    const nameError = nameValidator(name.value)
    if (nameError) {
      setName({ ...name, error: nameError })
      return;
    }

    navigation.navigate('RegisterPhoneScreen', {
      name: name.value,
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <BackButton goBack={navigation.goBack} />
        <TitleBar text='Tạo tài khoản' />
      </View>

      <NotifiBar text='Sử dụng tên thật giúp bạn bè dễ nhận ra bạn.' />

      <View style={styles.main}>
        <TextInput
          label='name'
          placeholder="Tên đầy đủ"
          style={styles.input}
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
        />
      </View>

      <Text style={styles.text_err}>{name.error}</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '80%' }}></View>
        <View style={styles.btn}>
          <TouchableOpacity mode="contained" onPress={onLoginPressed}>
            <AntDesign name="rightcircle" size={50} color="#00bfff" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },

  title: {
    backgroundColor: '#00bfff',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 20,
    height: 70,
    alignItems: 'center',

  },

  main: {
    alignItems: 'center'
  },

  input: {
    width: '95%',
    marginTop: 30,
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },

  text_err: {
    color: 'red',
    paddingLeft: 10
  },

  btn: {
    width: 50,
    height: 50
  }
});