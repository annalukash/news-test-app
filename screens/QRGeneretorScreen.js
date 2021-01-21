import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { QRCode } from "react-native-custom-qr-codes-expo";
import Input from '../components/Input';


const QRGenerator = () => {
    const [link, setLink] = useState("");
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.text}>Generate your QR code!</Text>
                    <Input placeholder="Input your link" value={link} onChangeText={setLink} />
                </View>
                <QRCode content={link || ' '} />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "sf-600",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 20,
    },
});

export default QRGenerator;