import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/core';
import moment from 'moment';
import Inbox from '../components/Inbox';
import ChatBar from '../components/ChatBar';

const chat = {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Minh',
		imageUri: 'https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/240530572_3042163572773692_5707998733869317352_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hP1ksMyITCkAX_JzK04&_nc_ht=scontent.fhph1-2.fna&oh=a21c2df2790ebe4530a8602e82622d88&oe=61A1F256',
	}, {
		id: 'u2',
		name: 'Huy',
		imageUri: 'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/53839948_2350366775245449_2386366473418309632_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JCpuHYnKrCIAX_qLiV5&_nc_ht=scontent.fhph1-3.fna&oh=4dbfeae767ccc626b491cf3f7c36a0c2&oe=619DD73B',
	}],
	messages: [{
		id: 'm1',
		content: 'Còn đúng cái nịt thôi :v',
		createdAt: '2021-10-27T12:48:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm2',
		content: 'Còn cái nịt!',
		createdAt: '2021-10-27T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm3',
		content: 'Nhặt được 20 triệu?',
		createdAt: '2021-10-27T14:49:40.000Z',
		user: {
			id: 'u1',
			name: 'Minh',
		},
	}, {
		id: 'm4',
		content: 'Ngu dốt',
		createdAt: '2021-10-27T14:50:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm5',
		content: 'Nhặt dơ lên của ai đây',
		createdAt: '2021-10-27T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Minh',
		},
	}, {
		id: 'm6',
		content: 'Tham lam',
		createdAt: '2021-10-27T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm7',
		content: 'Nhặt đút vào túi?',
		createdAt: '2021-10-27T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Minh',
		},
	}]
}

export default function ChatScreen({ route, navigation }) {
    
	const { name } = route.params;
	const { imageUri } = route.params;
    return (
        <View width='100%' height='100%' backgroundColor='f0f0f0' >
            <ChatBar name={name} imageUri={imageUri} navigation={navigation}/>
            <FlatList
                data={chat.messages}
                renderItem={({ item }) => {
                    const isMyMessage = () => {
                        return item.user.id === 'u1';
                    }
                    return (
                        <View style={styles.container}>
                            {!isMyMessage() && <Image source={{uri:imageUri}} style={styles.avatar} />}
                            <View style={[
                                styles.messageBox, {
                                    backgroundColor: isMyMessage() ? '#00bfff' : 'white',
                                    width: isMyMessage() ? '85%' : '80%',
                                    marginLeft: isMyMessage() ? '15%': 5,
                                }
                            ]}>
                                
                                <Text style={styles.message}>{item.content}</Text>
                                <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
                            </View>
                        </View>
                    )
                }}
                inverted
            />
            <Inbox />
        </View>

    );
  }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    messageBox: {
        borderRadius: 15,
        padding: 10,
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
    },
    message: {
		fontSize: 15,
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
        fontSize: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
});