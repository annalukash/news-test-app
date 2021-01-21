import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import * as Linking from "expo-linking";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewsDetailsScreen = ({ navigation, route }) => {
    const { newsDetails } = route.params;
    const { title, urlToImage, url, content, author } = newsDetails;

    const onOpenExternalLink = () => {
        Linking.openURL(url);
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ alignSelf: "center" }}>
                <Image source={{ uri: urlToImage }} style={styles.image} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.content}>{content}</Text>
                {author ? (
                    <Text style={{ ...styles.content, color: "rgba(171,175,186,1)" }}>Author: {author}</Text>
                ) : null}
            </View>
            <View style={{marginBottom: 20}}>
                <TouchableOpacity onPress={onOpenExternalLink}>
                    <Text>
                        Source: <Text style={styles.url}>{url}</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    title: {
        fontFamily: "sf-600",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 20,
    },
    image: {
        width: 104,
        height: 104,
        borderRadius: 16,
    },
    content: {
        fontFamily: "sf-400",
        fontSize: 16,
        textAlign: "justify",
    },
    url: {
        textDecorationLine: "underline",
    },
});

export default NewsDetailsScreen;
