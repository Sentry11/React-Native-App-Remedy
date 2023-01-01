import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { ListItem } from "react-native-elements";
import { db } from "../firebase";

import {colors} from "../style/colors.js"

const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = useState([]);
    useEffect(() => {
        const unsubscribe = db
            .collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setChatMessages(snapshot.docs.map((doc) => doc.data()))
            );
        return unsubscribe;
    }, []);
    return (
        <ListItem
            key={id}
            onPress={() => enterChat(id, chatName)}
            containerStyle={{backgroundColor: colors.secondary }}
            bottomDivider
        >
            <Avatar
                rounded
                source={{
                    uri:
                        chatMessages?.[0]?.photoURL ||
                        "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg",
                }}
            />
            <ListItem.Content >
                <ListItem.Title style={{ fontWeight: "800", fontSize: 20, color: colors.white }}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"  style = {{color: colors.lightSecondary}}>
                    {chatMessages?.[0]?.displayName}:{""}
                    {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

export default CustomListItem;

const styles = StyleSheet.create({});
