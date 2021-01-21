import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import QRGenerator from "../screens/QRGeneretorScreen";
import SignInScreen from "../screens/SignInScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const { isSignedIn } = useSelector((state) => state);
    return (
        <Drawer.Navigator initialRouteName={isSignedIn ? "Home" : 'SignIn'}>
            {isSignedIn ? (
                <>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="QRGenerator" component={QRGenerator} options={{ title: "QR Generator" }} />
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                </>
            ) : (
                <>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="QRGenerator" component={QRGenerator} options={{ title: "QR Generator" }} />
                    <Drawer.Screen name="SignIn" component={SignInScreen} options={{ title: "Sign In" }} />
                </>
            )}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
