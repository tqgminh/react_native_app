import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterNameScreen from "../screens/RegisterNameScreen";
import RegisterPhoneScreen from "../screens/RegisterPhoneScreen";
import RegisterPasswordScreen from "../screens/RegisterPasswordScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MeScreen from "../screens/MeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import TimelineScreen from "../screens/TimelineScreen";
import ChatScreen from "../screens/ChatScreen";
import OptionsScreen from "../screens/OptionsScreen";
import UserInfoScreen from "../screens/UserInfoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FriendsRequestScreen from "../screens/FriendsRequestScreen";
import AcceptFriendRequestScreen from "../screens/AcceptFriendRequestScreen";
import FriendsInvitationScreen from "../screens/FriendsInvitationScreen";
import SearchDetailScreen from "../screens/SearchDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import AccAndSecScreen from "../screens/AccAndSecScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";
import AddPostScreen from "../screens/AddPostScreen";
import ImageBrowserScreen from "../screens/ImageBrowserScreen";
//import DemoPost from "../screens/DemoPost";
import SuggestFriendScreen from "../screens/SuggestFriendScreen";
import PhotoAlbumScreen from "../screens/PhotoAlbumScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangeInfoScreen from "../screens/ChangeInfoScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="MessagesScreen"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          tabBarLabel: "Tin nhắn",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          tabBarLabel: "Danh bạ",
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="DiscoveryScreen"
        component={DiscoveryScreen}
        options={{
          tabBarLabel: "Khám phá",
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TimelineScreen"
        component={TimelineScreen}
        options={{
          tabBarLabel: "Nhật ký",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircleo" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MeScreen"
        component={MeScreen}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootNavigator = () => {
  const { token, phone, username, isLogin } = useSelector(
    (state) => state.userReducer
  );
  return (
    <NavigationContainer>
      {isLogin == false ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="RegisterNameScreen"
            component={RegisterNameScreen}
          />
          <Stack.Screen
            name="RegisterPhoneScreen"
            component={RegisterPhoneScreen}
          />
          <Stack.Screen
            name="RegisterPasswordScreen"
            component={RegisterPasswordScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName="ChangeInfoScreen"
        >
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
          <Stack.Screen
            name="SearchDetailScreen"
            component={SearchDetailScreen}
          />
          <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="AccAndSecScreen" component={AccAndSecScreen} />
          <Stack.Screen
            name="FriendsRequestScreen"
            component={FriendsRequestScreen}
          />
          <Stack.Screen
            name="AcceptFriendRequestScreen"
            component={AcceptFriendRequestScreen}
          />
          <Stack.Screen
            name="FriendsInvitationScreen"
            component={FriendsInvitationScreen}
          />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen
            name="UpdatePasswordScreen"
            component={UpdatePasswordScreen}
          />
          <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
          {/* <Stack.Screen name="DemoPost" component={DemoPost} /> */}
          <Stack.Screen
            name="ImageBrowserScreen"
            component={ImageBrowserScreen}
            options={{
              headerShown: true,
              title: "Selected 0 files",
            }}
          />
          <Stack.Screen
            name="SuggestFriendScreen"
            component={SuggestFriendScreen}
          />
          <Stack.Screen name="PhotoAlbumScreen" component={PhotoAlbumScreen} />
          <Stack.Screen
            name="EditProfileScreen"
            component={EditProfileScreen}
          />
          <Stack.Screen name="ChangeInfoScreen" component={ChangeInfoScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

/* return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterNameScreen" component={RegisterNameScreen} />
      <Stack.Screen name="RegisterPhoneScreen" component={RegisterPhoneScreen} />
      <Stack.Screen name="RegisterPasswordScreen" component={RegisterPasswordScreen} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
      <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="AccAndSecScreen" component={AccAndSecScreen} />
      <Stack.Screen name="FriendsRequestScreen" component={FriendsRequestScreen} />
      <Stack.Screen name="AcceptFriendRequestScreen" component={AcceptFriendRequestScreen} />
      <Stack.Screen name="FriendsInvitationScreen" component={FriendsInvitationScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="UpdatePasswordScreen" component={UpdatePasswordScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}; */

export default RootNavigator;
