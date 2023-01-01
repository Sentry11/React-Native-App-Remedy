import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import TrackPlayer from 'react-native-track-player';
import LoginScreen from "./main-screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./main-screens/RegisterScreen";
import HomeScreen from "./main-screens/HomeScreen";
import AddChatScreen from "./main-screens/AddChatScreen";
import ChatScreen from "./main-screens/ChatScreen";
import MainScreen from "./main-screens/MainScreen";

import Questionery from "./questionary-part/screens/questionery";
import EndOfQuestionery from "./Questionery/Screens/EndOfQuestionery";
import MusicPlayer from "./AudioPlayer/screens/MusicPlayer";
import DirectoryMainScreen from "./Directory/DirectoryMainScreen";
import SinglePageDirectory from "./Directory/SinglePageDirectory";

import { colors } from "./style/colors";

const Stack = createStackNavigator();
const globalScreenOptions = {
    headerStyle: { backgroundColor: colors.secondary },
    headerTitleStyle: { color: colors.white},
    headerTintColor: colors.white,
};

// await TrackPlayer.setupPlayer({});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen name="Вхід" component={LoginScreen} />
                <Stack.Screen name="Реєстрація" component={RegisterScreen} />
                <Stack.Screen name ="Меню" component = {MainScreen} />
                <Stack.Screen name="Головна" component={HomeScreen} />
                <Stack.Screen name="Створити чат" component={AddChatScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name = "Опитування" component={Questionery}  initialParams={{ itemId: 42 }}/>
                <Stack.Screen name = "Результат" component = {EndOfQuestionery}/>
                <Stack.Screen name = "Музичний плеєр" component = {MusicPlayer}/>
                <Stack.Screen name ="Вибір музичного інструменту" component = {DirectoryMainScreen}/>
                <Stack.Screen name = "Стаття" component = {SinglePageDirectory}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

