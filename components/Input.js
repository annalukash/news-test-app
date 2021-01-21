import React from "react";
import { TextInput, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const Input = ({ placeholder, value, onChangeText, style }) => {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={{ ...styles.input, ...style }}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: "rgba(171,175,186,1)",
        borderWidth: 1,
        width: width - 40,
        padding: 10,
        textAlign: "center",
        marginVertical: 10,
    },
});

export default Input;