import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import firebase from "firebase";
import { auth, db } from "../firebase/Firebase";


import { colors } from "../style/colors";

const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitleAlign: "left",
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        rounded
                        source={{
                            uri: messages[0]?.data.photoURL,
                        }}
                    />
                    <Text
                        style={{
                            marginLeft: 10,
                            fontWeight: "700",
                            fontSize: 20,
                            color: colors.white
                        }}
                    >
                        {route.params.chatName}
                    </Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" color={colors.white}  size={28} />
                </TouchableOpacity>
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
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="videocamera" size={24} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="phone" size={24} color={colors.white} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, messages]);

    const sendMessage = () => {
        db.collection("chats").doc(route.params.id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
        });
        setInput("");
    };

    useLayoutEffect(() => {
        const unsubscribe = db
            .collection("chats")
            .doc(route.params.id)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
        return unsubscribe;
    }, [route]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
                            {messages.map(({ id, data }) =>
                                data.email === auth.currentUser.email ? (
                                    <View key={id} style={styles.receiver}>
                                        <Avatar
                                            position="absolute"
                                            rounded
                                            containerStyle={{
                                                position: "absolute",
                                                bottom: -15,
                                                right: -5,
                                            }}
                                            bottom={-15}
                                            right={-5}
                                            size={30}
                                            source={{
                                                uri: data.photoURL,
                                            }}
                                        />
                                        <Text style={styles.receiverText}>
                                            {data.message}
                                        </Text>
                                    </View>
                                ) : (
                                    <View key={id} style={styles.sender}>
                                        <Avatar
                                            position="absolute"
                                            rounded
                                            containerStyle={{
                                                position: "absolute",
                                                bottom: -15,
                                                right: -5,
                                            }}
                                            bottom={-15}
                                            right={-5}
                                            size={30}
                                            source={{
                                                uri: data.photoURL,
                                            }}
                                        />
                                        <Text style={styles.senderText}>
                                            {data.message}
                                        </Text>
                                        <Text style={styles.senderName}>
                                            {data.displayName}
                                        </Text>
                                    </View>
                                )
                            )}
                        </ScrollView>
                        <View style={styles.footer}>
                            <TextInput
                                value={input}
                                onChangeText={(text) => setInput(text)}
                                onSubmitEditing={sendMessage}
                                placeholder="Write a message..."
                                style={styles.textInput}
                            />
                            <TouchableOpacity
                                onPress={sendMessage}
                                activeOpacity={0.5}
                            >
                                <Ionicons name="send" size={24} color= {colors.white} />
                            </TouchableOpacity>
                        </View>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    receiver: {
        padding: 15,
        backgroundColor: colors.lightSecondary,
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position: "relative",
        color:colors.white
    },
    sender: {
        padding: 15,
        backgroundColor: colors.main,
        alignSelf: "flex-start",
        borderRadius: 20,
        margin: 15,
        maxWidth: "80%",
        position: "relative",
    },
    senderText: {
        color: colors.white,
        fontWeight: "500",
        marginLeft: 10,
        marginBottom: 15,
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color: colors.white,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: colors.secondary,
        padding: 10,
        color: colors.white,
        borderRadius: 30,
    },
    receiverText:{
        color: colors.white

    }
});
