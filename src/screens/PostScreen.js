import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import TitleBar from '../components/TitleBar';

const data = {
    id: 1,
    username: 'trannguyenhan',
    avatarURI:
      'https://i.pinimg.com/originals/de/61/7d/de617d1ce71f621bbeba8b293996e9fc.jpg',
    imageURI:
      'https://i.pinimg.com/originals/ee/83/49/ee8349d0a2166192988ecc3854924f18.jpg',
    status:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    likes: 12,
    publishDate: new Date().toDateString()
  }

function tapToLike(likeIcon) {
  if (likeIcon % 2 === 0) {
    return require('../assets/images/redHeart.png');
  } else {
    return require('../assets/images/like.png');
  }
}

function tapToBookmark(bookmarkIcon) {
  if (bookmarkIcon % 2 === 0) {
    return require('../assets/images/bookmarkWhite.png');
  } else {
    return require('../assets/images/bookmark.png');
  }
}

export default function TimelineScreen({navigation}) {
  const [likeIcon, setLikeIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);

  return (
    <View style={{backgroundColor: '#4d4d4d'}}>
        <TitleBar navigation={navigation} data={{text: 'Bình luận'}} />
        <View>
            {/* header: include username, more button, avatar, post*/}
            <View style={styleTimeline.container}>
                <View style={styleTimeline.nameContainer}>
                    <Image
                        source={{uri: data.avatarURI}}
                        style={styleTimeline.avatar}
                    />
                    <Text style={styleTimeline.username}>{data.username}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/more.png')} style={styleTimeline.iconMore} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={{uri: data.imageURI}}
                style={styleTimeline.post}
            />

            {/*body: like button, bookmark, comment button */}
            <View style={styleAction.container}>
                {/*like icon and comment icon*/}
                <View style={{flexDirection:'row', justifyContent: 'flex-start'}}>
                    <TouchableOpacity onPress={() => setLikeIcon(likeIcon + 1)}>
                        <Image source={tapToLike(likeIcon)} style={styleAction.actionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/comment.png')} style={styleAction.actionIcon} />
                    </TouchableOpacity>
                </View>

                {/*bookmark icon*/}
                <TouchableOpacity onPress={() => setBookmarkIcon(bookmarkIcon+1)} >
                    <Image source={tapToBookmark(bookmarkIcon)} style={styleAction.actionIcon} />
                </TouchableOpacity>
            </View>

            {/*number of like post*/}
            <View>
                <TouchableOpacity style={{marginLeft: 15, marginTop: 10, marginEnd: 15}} >
                    <Text style={{color: '#fff', fontWeight: 'bold'}} >
                        {data.likes} likes{' '}
                    </Text>
                </TouchableOpacity>
            </View>

            {/*status of post*/}
            <View
                style={{
                    marginStart: 15,
                    marginEnd: 15,
                    flexDirection: 'column',
                    marginTop: 10
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>
                    {data.status}
                </Text>
            </View>
        </View>

      {/*Comment of Post*/}
        <View>
          <TouchableOpacity
            style={{marginTop: 5, marginStart: 15}}
            onPress={() => console.log('Pressed Post Comments')}>
            <Text style={{color: '#fff'}}>
                View all
            </Text>
          </TouchableOpacity>
        </View>

        {/*Date of time*/}
        <View>
          <TouchableOpacity onPress={() => console.log('Pressed Post Publish Date')}>
            <Text
              style={{
                color: '#fff',
                marginTop: 5,
                marginStart: 15,
                fontSize: 12,
              }}>
              {data.publishDate}
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styleAction = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginEnd: 15,
        marginTop: 15
    },

    actionIcon: {
        width: 23,
        height: 23,
        marginStart: 15
    }
});


const styleTimeline = StyleSheet.create({
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 30,
    },

    username: {
        color: '#fff',
        marginStart: 10,
        fontWeight: 'bold'
    },

    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 6,
        marginStart: 10,
        marginEnd: 10,
        backgroundColor: '#4d4d4d'
    },

    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    post:{
        height: Dimensions.get('screen').height / 3,
        width: Dimensions.get('screen').width,
        resizeMode: 'contain'
    },

    iconMore: {
        height: 15,
        width: 15,
        marginLeft: 5
    }
})
