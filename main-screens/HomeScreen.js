import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, ScrollView, View,Text } from "react-native";
import CustomListItem from "../main-components/CustomListItem";
import { auth, db } from "../firebase/Firebase";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../style/colors";

const HomeScreen = ({ navigation }) => {
    const [chats, setChats] = useState([]);
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Вхід");
        });
    };
    useEffect(() => {
        const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        return unsubscribe;
    }, []);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Головний екран",
            headerStyle: { backgroundColor: colors.secondary },
            headerTitleStyle: { color: colors.white },
            headerTintColor: colors.white,
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                       < AntDesign name = "close" size = {24} color = "white"/>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5} onPress = {() => navigation.navigate("Меню")}>
                        <AntDesign name="book" size={24} color="white" />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Створити чат")}
                        activeOpacity={0.5}
                    >
                        <AntDesign name="addusergroup" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);


    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", { id: id, chatName: chatName });
    };


    return (
        <SafeAreaView style = {styles.back}>
            <Text style = {styles.upperText}> Ваші приватні чати знаходяться нижче</Text>
            <ScrollView style={styles.container}>
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListItem
                        key={id}
                        id={id}
                        chatName={chatName}
                        enterChat={enterChat}
                    
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: { height: "100%", backgroundColor: colors.dark },
    upperText: {
        margin:20,
        backgroundColor:colors.dark,
        color: colors.white,
        fontSize:15,
        textAlign:"center"

    },
    back : {backgroundColor:colors.dark}

});
