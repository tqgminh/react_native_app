import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Picker, Button, TouchableOpacity, Image, Dimensions} from 'react-native';
import {launchCameraAsync, launchImageLibraryAsync} from 'expo-image-picker';
import TitleBar from '../components/TitleBar';

export default function addPostScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState("Public");
  const [imageSource, setImageSource] = useState(null);

  const openLibrary = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };

    launchImageLibraryAsync(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // ADD THIS
        setImageSource(source.uri);
      }
    });
  }

  const openCamara = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };

    launchCameraAsync(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // ADD THIS
        setImageSource(source.uri);
      }
    });
  }

  return (
    <View>
      {/*Input status area*/}
      <View>
        <TitleBar navigation={navigation} data={{text: 'Thêm bài viết'}} />
        <TextInput
          style={palette.input}
          placeholder="Bạn đang nghĩ gì nào?"
          keyboardType="numeric"
          multiline="true"
        />
      </View>
      
      {/*Location, public/pirvate status area */}
      <View style={publicStyle.container}>
        <Picker
          selectedValue={selectedValue}
          mode="dropdown"
          style={{ height: 20, width: 150, borderRadius: 100, alignItems:'right' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Public" value="public" />
          <Picker.Item label="Private" value="private" />
          <Picker.Item label="Friends" value="friends" />
        </Picker>
        <Button
          title="Chọn địa điểm"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{height: 10, width: 100}}
        />
      </View>

      {/*Pick image from library of device*/}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', textAlignVertical: 'center'}}>
          <TouchableOpacity
            onPress={openLibrary}
            style={{ borderRadius: 5, backgroundColor: '#fff', width: Dimensions.get('screen').width / 2}}
          >
            <Text style={{padding: 10, fontSize: 18}}>Pick an image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openCamara}
            style={{borderRadius: 5, backgroundColor: '#fff', width: Dimensions.get('screen').width / 2}}
          >
            <Text style={{padding: 10, fontSize: 18}}>Camera</Text>
          </TouchableOpacity>
        </View>
        {imageSource === null ? (
          <Image
            source={require('../assets/placeholderimage.jpg')}
            style={imageStyle.imageBox}
          />
        ) : (
          <Image
            source={{ uri: imageSource }}
            style={imageStyle.imageBox}
            resizeMode='contain'
          />
        )}
      </View>
    </View>
    
  );
}

const palette = StyleSheet.create({
  text: {
    color: 'white',
  },

  input: {
    height: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    borderWidth: 0,
  },
});

const publicStyle = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    alignItems: 'center'
  }
});

const imageStyle = StyleSheet.create({
  imageBox:{
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 4
  }
})