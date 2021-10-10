import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterNameScreen from '../screens/RegisterNameScreen';
import RegisterPhoneScreen from '../screens/RegisterPhoneScreen';
import RegisterPasswordScreen from '../screens/RegisterPasswordScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MeScreen from '../screens/MeScreen';
import ContactsScreen from '../screens/ContactsScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import TimelineScreen from '../screens/TimelineScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName='MessagesScreen'>
      <Tab.Screen name='MessagesScreen' component={MessagesScreen}
        options={{
          tabBarLabel: "Tin nhắn",
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }} />

      <Tab.Screen name='ContactsScreen' component={ContactsScreen}
        options={{
          tabBarLabel: "Danh bạ",
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }} />

      <Tab.Screen name='DiscoveryScreen' component={DiscoveryScreen}
        options={{
          tabBarLabel: "Khám phá",
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
        }} />
      <Tab.Screen name='TimelineScreen' component={TimelineScreen}
        options={{
          tabBarLabel: "Nhật ký",
          tabBarIcon: ({ color }) => (
            <AntDesign name="clockcircleo" size={24} color={color} />
          ),
        }} />
      <Tab.Screen name='MeScreen' component={MeScreen}
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
        initialRouteName='StartScreen'
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
        <Stack.Screen name='StartScreen' component={StartScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterNameScreen' component={RegisterNameScreen} />
        <Stack.Screen name='RegisterPhoneScreen' component={RegisterPhoneScreen} />
        <Stack.Screen name='RegisterPasswordScreen' component={RegisterPasswordScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
