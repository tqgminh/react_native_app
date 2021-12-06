import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import TitleBar from '../components/TitleBar';


export default function AddPostScreen1({ navigation, route }) {
    let photos = [];
    if( route.params){
        photos = route.params.photos;
    }
    const renderImage = (item, i) =>{
        return (
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: item.uri }}
            key={i}
          />
        )
      }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignContent:'center' }}>
            <TitleBar navigation={navigation} data={{text: 'Đăng nhập'}} />
        <Button
          title="Open image browser"
          onPress={() => { navigation.navigate('ImageBrowserScreen'); }}
        />
        <ScrollView>
          {photos.map((item, i) => renderImage(item, i))}
        </ScrollView>
      </View>
    );
}



