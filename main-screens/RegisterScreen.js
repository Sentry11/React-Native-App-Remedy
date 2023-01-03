import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View,  } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Input } from "react-native-elements";
import { auth } from "../firebase/Firebase";
import { Button, Text } from "@rneui/themed";
import CheckBox from 'expo-checkbox';

import { colors } from "../style/colors";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to login",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL:
                        imageUrl ||
                        "http://farmersca.com/wp-content/uploads/2016/07/default-profile.png",
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50, color:colors.white }}>
                Сторіть власний акаунт
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Ім'я"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style = {styles.inputs}
                />
                <Input
                    placeholder="Пошта"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style = {styles.inputs}
                />
                <Input
                    placeholder="Пароль"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style = {styles.inputs}
                />
                <Input
                    placeholder="Зображення (по бажанню)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                    style = {styles.inputs}
                />


                <View style={{flexDirection:'row', marginBottom:25}}>              
                <CheckBox
                style = {{marginHorizontal:12}}
                    //   disabled={false}
                    //   value={toggleCheckBox}
                    //   onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
               <Text style = {{color:colors.secondary}}>Зареєструватися як ментор</Text>
               </View>

            </View>
            <Button
                buttonStyle={styles.button}
                onPress={register}
                title={<CustomTitleRegister />}
            />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};
const CustomTitleRegister = () => {
    return <Text style={styles.textButton}>Зареєструватися</Text>;
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: colors.dark,
    },
    button: {
        width: 200,
        marginTop: 10,
        backgroundColor: colors.secondary,
        borderWidth: 1.5,
        borderColor: colors.dark,
        borderRadius: 15,
    },
    textButton: {
        fontSize: 18,
        color: colors.white
    },
    inputContainer: {
        width: 300,
    },
    inputs: {
        color: colors.white
    }
});
