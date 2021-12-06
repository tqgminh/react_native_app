import React from 'react';
import { StyleSheet, Text, View, Linking, FlatList, Image, TouchableOpacity } from 'react-native';
import { Portal, Dialog, Paragraph, Button, Provider, Divider } from 'react-native-paper';
import { useRoute } from '@react-navigation/core';
import moment from 'moment';
import Inbox from '../components/Inbox';
import ChatBar from '../components/ChatBar';
import { defaultColor } from '../styles';
import { render } from 'react-dom';
import { MaterialIcons } from "@expo/vector-icons";

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
		content: 'abc https://dantri.com.vn/ bcd',
		createdAt: '2021-10-27T12:48:00.000Z',
		user: {
			id: 'u2',
			name: 'Huy',
		},
	}, {
		id: 'm2',
		content: 'Còn cái nịt 0987654321',
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
};

export default function ChatScreen({ route, navigation }) {
    
	const { name } = route.params;
	const { imageUri } = route.params;
	const { isFriend } = route.params;

	const [refreshing, setRefreshing] = React.useState(false);

	const [visible, setVisible] = React.useState(false);

	const showDialog = () => setVisible(true);
	
	const hideDialog = () => setVisible(false);

	function validate(word) {
		var urlRegex = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/g;
		var pnRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/g;
		if (word.match(urlRegex)) {
			return [
			<Text
			onPress={()=>Linking.openURL(word)}
			style={{color: defaultColor, textDecorationLine: 'underline'}}>
				{word}
			</Text>, ' '];
		}
		else if (word.match(pnRegex)) {
			return [
			<Text style={{color: defaultColor, textDecorationLine: 'underline'}}>
				{word}
			</Text>, ' '];
		};
		return [word, ' '];
	}

	function flatMap(array, fn) {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			var mapping = fn(array[i]);
			result = result.concat(mapping);
		}
		return result;
	}
	const replaceURLs = (message) => {
		message = flatMap(message.split(' '), validate);
			
		message.pop();
		return message;
		
		/*
		return message.replace(urlRegex, function (url) {
			var hyperlink = url;
			if (!hyperlink.match('^https?:\/\/')) {
				hyperlink = 'http://' + hyperlink;
			}
			return (<Text onPress={() => Linking.openURL(hyperlink)}>{url}</Text>);
		});*/
	}
	
    return (
		
        <View width='100%' height='100%' backgroundColor='f0f0f0' >
            <ChatBar name={name} imageUri={imageUri} navigation={navigation}/>
			{!isFriend &&
			<View style={{
				flexDirection:'row',
				textAlign: 'center',
				justifyContent: 'center',
				backgroundColor: 'white',
				}}>
				<TouchableOpacity style={{flexDirection: 'row'}}>
                	<MaterialIcons style={{margin: 5}} name='people' size={25} color='black' />
					<Text style={{fontSize: 18, margin: 5}}>Kết bạn</Text>
            	</TouchableOpacity>
				
			</View>}
            <FlatList
                data={chat.messages}
                renderItem={({ item }) => {
                    const isMyMessage = () => {
                        return item.user.id === 'u1';
                    };
					const isFirstMessage = () => {
						var numOfMess = chat.messages.length;
						return item.id === chat.messages[numOfMess-1].id;
					};
                    return (
                        <View>
							
							<View>
								{isFirstMessage() &&
								<Text style={{
									alignSelf: 'center',
									textAlign: 'center',
									fontSize: 12,
									backgroundColor: '#C0C0C0',
									borderRadius: 5,
									width: 110,
									}}>
									{moment(item.createdAt).format('hh:mm, DD/MM/YYYY')}
								</Text>}
							</View>
						
						<View style={styles.container}>
                            {!isMyMessage() && <Image source={{uri:imageUri}} style={styles.avatar} />}
                            <View style={[
                                styles.messageBox, {
                                    backgroundColor: isMyMessage() ? defaultColor : 'white',
                                    width: isMyMessage() ? '85%' : '80%',
                                    marginLeft: isMyMessage() ? '15%': 5,
                                }
                            ]}>
								<Text style={styles.message}>{replaceURLs(item.content)}</Text>
                                <Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
                            </View>
                        </View>
						</View>
                    )
                }}
				keyExtractor={(item) => {
					return item.id;
				}}
				refreshing={refreshing}
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