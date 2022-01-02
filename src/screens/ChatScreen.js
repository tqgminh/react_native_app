import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Linking, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { Portal, Dialog, Paragraph, Button, Provider, Divider } from 'react-native-paper';
import { useRoute } from '@react-navigation/core';
import moment from 'moment';
//import Inbox from '../components/Inbox';
import ChatBar from '../components/ChatBar';
import { defaultColor } from '../styles';
import { render } from 'react-dom';
import { FontAwesome5, MaterialCommunityIcons, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { getAllChat, getAllMessage, sendMessagePrivate, createChatPrivate, getAllChatInfo } from '../api/ChatAPI';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

export default function ChatScreen({ route, navigation }) {
	const dispatch = useDispatch();
	const { name } = route.params;
	const { imageUri } = route.params;
	const { isFriend } = false;// route.params;
	const { chatId1 } = route.params;
	const { receivedId } = route.params;

	const [chatId, setChatId] = useState(chatId1); 

	const { token, phone, username, isLogin, avatar, id, listPosts } = useSelector(
		(state) => state.userReducer
	);

	const [refreshing, setRefreshing] = React.useState(false);

	const [visible, setVisible] = React.useState(false);

	const showDialog = () => setVisible(true);

	const hideDialog = () => setVisible(false);

	const [messages, setMessages] = useState([]);

	const [message, setMessage] = useState('');

	useEffect(() => {
		if (chatId != null) {
			getAllMessage(token, chatId).then((res) => {
				if (res.success) {
					//alert(res)
					//console.log(JSON.stringify(res.data.data));
					//setListPosts(res.data.data.reverse());
					setMessages(res.data.data.reverse());
				} else {
					showMessage({
						title: "gửi tin nhắn thất bại!",
						message: "Có lỗi xảy ra vui lòng thử lại!",
						type: "fail",
						position: "center"
					});
				}
			});
		}
	}, []);


	const onMircophonePress = () => {
		console.warn("Microphone")
	}

	const onSendPress = async () => {
		/* console.warn(`Sending: ${message}`); */
		let content = message;
		if (chatId != null) {
			sendMessagePrivate({ token, chatId, receivedId, content }).
				then(res => {
					if (res.success) {
						getAllMessage(token, chatId).then((res) => {
							if (res.success) {
								//alert(res)
								//console.log(JSON.stringify(res.data.data));
								//setListPosts(res.data.data.reverse());
								setMessages(res.data.data.reverse());
							} else {
								showMessage({
									title: "Gửi tin nhắn thất bại!",
									message: "Có lỗi xảy ra vui lòng thử lại!",
									type: "fail",
									position: "center"
								});
							}
						});
					} else {
						showMessage({
							title: "lấy tin nhắn thất bại!",
							message: "Có lỗi xảy ra vui lòng thử lại!",
							type: "fail",
							position: "center"
						});
					}
				});
		} else {
			createChatPrivate({ token, receivedId, content }).
			
				then(res => {
					if (res.success) {
						getAllMessage(token,res.data.data.chat._id).then((res) => {
							if (res.success) {
								setMessages(res.data.data.reverse());
							} else {
								showMessage({
									title: "Gửi tin nhắn thất bại!",
									message: "Có lỗi xảy ra vui lòng thử lại!",
									type: "fail",
									position: "center"
								});
							}
						});
					} else {
						showMessage({
							title: "Lấy tin nhắn thất bại!",
							message: "Có lỗi xảy ra vui lòng thử lại!",
							type: "fail",
							position: "center"
						});
					}

					getAllChatInfo({token, dispatch, id}).then((res) => {
						if (res) {
						  //console.log(JSON.stringify(res.data.data));
						  //setListPosts(res.data.data.reverse()); 
						  //dispatch(setListProfileChatState(list.reverse()));
						  //dispatch(setListChatState(res.data.data.reverse()));
						} else {
						  showMessage({
							title: "get list Post fail!",
							message: "Có lỗi xảy ra vui lòng thử lại!",
							type: "fail",
							position: "center"
						  });
						}
					  });
				});
		}

		setMessage('');
	}

	const onPress = () => {
		if (!message) {
			onMircophonePress();
		} else {
			onSendPress();
		}
	}

	const Inbox = () => {


		return (
			<View style={styles.ib_container}>
				<View style={styles.ib_mainContainer}>
					<FontAwesome5 name="laugh-beam" size={24} color="grey" />
					<TextInput
						placeholder={"Type a message"}
						style={styles.ib_textInput}
						multiline
						value={message}
						onChangeText={setMessage}
					/>
					<Entypo name="attachment" size={24} color="grey" style={styles.ib_icon} />
					{!message && <Fontisto name="camera" size={24} color="grey" style={styles.ib_icon} />}
				</View>
				<TouchableOpacity onPress={onPress}>
					<View style={styles.ib_buttonContainer}>
						{!message
							? <MaterialCommunityIcons name="microphone" size={28} color="white" />
							: <MaterialIcons name="send" size={28} color="white" />
						}
					</View>
				</TouchableOpacity>
			</View>
		)
	}



	function validate(word) {
		var urlRegex = /(?:(?:https?|ftp):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/g;
		var pnRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/g;
		if (word.match(urlRegex)) {
			return [
				<Text
					onPress={() => Linking.openURL(word)}
					style={{ color: defaultColor, textDecorationLine: 'underline' }}>
					{word}
				</Text>, ' '];
		}
		else if (word.match(pnRegex)) {
			return [
				<Text style={{ color: defaultColor, textDecorationLine: 'underline' }}>
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
			<ChatBar userId={receivedId} name={name} imageUri={imageUri} navigation={navigation} />
			{!isFriend &&
				<View style={{
					flexDirection: 'row',
					textAlign: 'center',
					justifyContent: 'center',
					backgroundColor: 'white',
				}}>
					<TouchableOpacity style={{ flexDirection: 'row' }}>
						<MaterialIcons style={{ margin: 5 }} name='people' size={25} color='black' />
						<Text style={{ fontSize: 18, margin: 5 }}>Kết bạn</Text>
					</TouchableOpacity>

				</View>}
			<FlatList
				data={messages}
				renderItem={({ item }) => {
					const isMyMessage = () => {
						return item.user._id === id;
					};
					const isFirstMessage = () => {
						var numOfMess = messages.length;
						return item._id === messages[numOfMess - 1]._id;
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
								{!isMyMessage() && <Image source={{ uri: imageUri }} style={styles.avatar} />}
								<View style={[
									styles.messageBox, {
										backgroundColor: isMyMessage() ? defaultColor : 'white',
										width: isMyMessage() ? '85%' : '80%',
										marginLeft: isMyMessage() ? '15%' : 5,
									}
								]}>
									<Text style={styles.message}>{replaceURLs(item.content)}</Text>
									<Text style={styles.time}>{moment(item.createdAt).fromNow()}</Text>
								</View>
							</View>
						</View>
					)
				}}
				keyExtractor={item => item._id}
				refreshing={refreshing}
				inverted
			/>
			{/* <Inbox /> */}
			<View style={styles.ib_container}>
				<View style={styles.ib_mainContainer}>
					<FontAwesome5 name="laugh-beam" size={24} color="grey" />
					<TextInput
						placeholder={"Type a message"}
						style={styles.ib_textInput}
						multiline
						value={message}
						onChangeText={setMessage}
					/>
					<Entypo name="attachment" size={24} color="grey" style={styles.ib_icon} />
					{!message && <Fontisto name="camera" size={24} color="grey" style={styles.ib_icon} />}
				</View>
				<TouchableOpacity onPress={onPress}>
					<View style={styles.ib_buttonContainer}>
						{!message
							? <MaterialCommunityIcons name="microphone" size={28} color="white" />
							: <MaterialIcons name="send" size={28} color="white" />
						}
					</View>
				</TouchableOpacity>
			</View>

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
	ib_container: {
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center',
	},
	ib_mainContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 50,
		marginRight: 10,
		flex: 1,
		alignItems: 'center',
	},
	ib_buttonContainer: {
		backgroundColor: defaultColor,
		borderRadius: 50,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',

	},
	ib_textInput: {
		flex: 1,
		marginHorizontal: 10,
	},
	ib_icon: {
		marginHorizontal: 5,
	}
});