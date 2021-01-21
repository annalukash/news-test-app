import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";


const NewsItem = ({ item, navigationHandler }) => {
    return (
        <TouchableOpacity style={styles.newsItem} onPress={() => navigationHandler(item)}>
            <View style={styles.titleContainer}>
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
                <Text numberOfLines={3} style={styles.title}>
                    {item.title}
                </Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text numberOfLines={6} style={styles.description}>
                    {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const HomeScreen = ({ navigation }) => {
    const { news } = useSelector((state) => state);
    const navigationHandler = (item) => {
        navigation.navigate("NewsDetails", { newsDetails: item });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={news}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item, index }) => (
                        <NewsItem index={index} item={item} navigationHandler={navigationHandler} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    newsItem: {
        borderBottomColor: "rgba(212,216,226,1)",
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontFamily: "sf-600",
        fontSize: 16,
        width: "75%",
    },
    image: {
        width: 58,
        height: 58,
        borderRadius: 8,
        marginRight: 20,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    description: {
        fontFamily: "sf-400",
        fontSize: 12,
        color: "rgba(171,175,186,1)",
    },
});

export default HomeScreen;
