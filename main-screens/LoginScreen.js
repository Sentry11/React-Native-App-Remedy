import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";
import { Button, Text } from "@rneui/themed";
import { colors } from "../style/colors";


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Головна");
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error)
        );
    };
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require("../assets/adaptive-icon.png")}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Електрона адреса"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    onSubmitEditing={signIn}
                    style = {styles.inputs}
                />
                <Input
                    placeholder="Пароль"
                    secureTextEntry
                    Type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                    style = {styles.inputs}
                />
            </View>
            <Button
                title={<CustomTitleLogin />}
                buttonStyle={styles.button}
                onPress={signIn}
            />
            <Button
                title={<CustomTitleRegister />}
                onPress={() => navigation.navigate("Реєстрація")}
                buttonStyle={styles.buttonOutline}
                type="outline"
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};
const CustomTitleLogin = () => {
    return <Text style={styles.textButton}>Увійти</Text>;
};
const CustomTitleRegister = () => {
    return <Text style={styles.textButtonOutline}>Зареєструватися</Text>;
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 55,
        backgroundColor: colors.dark,
    },
    inputContainer: { width: 300 },
    button: {
        width: 200,
        marginTop: 10,
        backgroundColor: colors.secondary,
        borderWidth: 1.5,
        borderColor: colors.secondary,
        borderRadius: 15,
        color: colors.white,
    },
    buttonOutline: {
        width: 200,
        marginTop: 10,
        borderWidth: 1.5,
        borderColor: colors.lightSecondary,
        borderRadius: 15,
    },
    textButton: {
        fontSize: 18,
        color: colors.white
    },
    textButtonOutline: {
        fontSize: 18,
        color: colors.white
    },

    inputs: {
        color: colors.white
    }
});
