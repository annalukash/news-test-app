import React from "react";
import { Text, TouchableOpacity } from "react-native";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import DrawerNavigator from "./DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../store/actions";

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { name, isSignedIn } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                title: name || "Home",
            }}
        >
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetailsScreen}
                options={({ route }) => ({ title: route.params.newsDetails.title })}
            />
            <Stack.Screen
                name="Home"
                component={DrawerNavigator}
                options={{
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => dispatch(signIn(false))}
                            style={{ marginRight: 20, display: isSignedIn ? "flex" : "none" }}
                        >
                            <Text>Sign Out</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
