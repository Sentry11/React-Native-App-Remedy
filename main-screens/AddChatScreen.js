import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase";
import { Button, Text } from "@rneui/themed";

import {colors} from "../style/colors.js" 


const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState("");
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Створити чат",
            headerBackTitle: "Chats",
        });
    }, [navigation]);

    const createChat = async () => {
        await db
            .collection("chats")
            .add({
                chatName: input,
            })
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => alert(error));
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Введіть назву кімнати"
                value={input}
                type="text"
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={<AntDesign name="edit" size={24} color={colors.white} />}
                style = {{textAlign: "center", backgroundColor: colors.white, }}
            />
            <Button
                disabled={!input}
                onPress={createChat}
                buttonStyle={styles.button}
                title={<CustomTitle />}
                style= {styles.button}
            />
        </View>
    );
};
const CustomTitle = () => {
    return <Text style={styles.textButton}>Створити</Text>;
};

export default AddChatScreen;

const styles = StyleSheet.create({
    container: { backgroundColor: colors.dark, padding: 30,paddingTop:210,  height: "100%" },

    button: {
        backgroundColor: colors.secondary,
        borderWidth: 1.5,
        borderColor: colors.lightSecondary,
        borderRadius: 15,
        
    },
    textButton: {
        fontSize: 18,
        borderColor: colors.lightSecondary,
        
       
    },
});
