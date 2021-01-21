import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import APIService from "./services/APIService";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './store/reducer';
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
    return Fonts.loadAsync({
        "sf-400": require("./assets/fonts/SFUIDisplay-Regular.ttf"),
        "sf-500": require("./assets/fonts/SFUIDisplay-Medium.ttf"),
        "sf-600": require("./assets/fonts/SF-UI-Display-Semibold.ttf"),
        "sf-900": require("./assets/fonts/SFUIDisplay-Black.ttf"),
    });
};

const store = createStore(reducer);

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(e) => console.log(e)} />
        );
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <APIService />
                <AppNavigator />
            </NavigationContainer>
        </Provider>
    );
}
