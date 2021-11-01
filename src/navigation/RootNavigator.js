import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

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
import SearchDetail from "../components/SearchDetail/SearchDetail";
import UserInfoScreen from "../screens/UserInfoScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FriendsRequestScreen from "../screens/FriendsRequestScreen";
import AcceptFriendRequestScreen from "../screens/AcceptFriendRequestScreen";
import FriendsInvitationScreen from "../screens/FriendsInvitationScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="MeScreen"
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
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        /* tabBarOptions={tabBarOptions}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })} */
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
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
        <Stack.Screen name="SearchDetail" component={SearchDetail} />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
