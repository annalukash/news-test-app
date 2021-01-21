import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { signIn, addName } from "../store/actions";
import Input from "../components/Input";

const { width } = Dimensions.get("window");

const SignInScreen = ({ navigation }) => {
    const [state, setState] = useState({
        login: "",
        password: "",
        name: "",
    });

    const dispatch = useDispatch();

    const validationHandler = () => {
        if (state.login !== "User" || state.password !== "123456") {
            Alert.alert("Login or password is incorrect", "Please, enter correct values");
        } else if (!state.name) {
            Alert.alert("Please, enter your name");
        } else {
            dispatch(signIn(true));
            dispatch(addName(state.name));
            navigation.navigate("Home");
            setState({ name: "", login: "", password: "" });
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ marginTop: 20 }}>
                    <Input
                        placeholder="Name"
                        value={state.name}
                        onChangeText={(text) => setState({ ...state, name: text })}
                    />
                    <Input
                        placeholder="Login"
                        value={state.login}
                        onChangeText={(text) => setState({ ...state, login: text })}
                    />
                    <Input
                        placeholder="Password"
                        value={state.password}
                        onChangeText={(text) => setState({ ...state, password: text })}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={validationHandler}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    button: {
        width: width - 40,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(85,96,180,1)",
        borderRadius: 20,
        marginTop: 20,
    },
});

export default SignInScreen;
