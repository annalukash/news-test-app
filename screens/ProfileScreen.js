import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Input from "../components/Input";
import { Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
    const [pickedImage, setPickedImage] = useState();

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (result.status !== "granted") {
            Alert.alert(
                "Insufficien permissions!", 
                "You need to grand camera permissions to use this app.", 
                [{ text: "Okay" }]
            );
            return false;
        }
        return true;
    };

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync();

        setPickedImage(image.uri);
        const response = await fetch('https://flutter-test.redentu.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(image.uri)
        });
          
        const result = await response.json();
        console.log(result.message)
    };



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, alignItems: "center", backgroundColor: '#fff' }}>
                <Text style={styles.text}>Your Profile</Text>
                {pickedImage ? (
                    <Image source={{uri: pickedImage}} style={styles.image} />
                ) : (
                    <View style={styles.image}>
                        <Icon
                            name="user"
                            type="font-awesome"
                            color="rgba(85,96,180,1)"
                            size={50}
                        />
                    </View>
                )}
                <Input placeholder="Name" />
                <Input placeholder="Last name" />
                <TouchableOpacity style={styles.button} onPress={takeImageHandler}>
                    <Text>Take photo</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: "sf-600",
        fontSize: 15,
        textAlign: "center",
        marginVertical: 20,
    },
    image: {
        width: 104,
        height: 104,
        borderRadius: 104 / 2,
        backgroundColor: "rgba(243,245,250,1)",
        alignItems: 'center',
        justifyContent: 'center'
    },
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

export default ProfileScreen;
