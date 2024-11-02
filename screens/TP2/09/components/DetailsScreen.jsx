import React from 'react';
import {View, StyleSheet, Text, ScrollView} from "react-native";

export default function DetailsScreen({route}) {

    const { title, summary, likes, shares, text, author, date } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Text style={styles.likes}>Curtidas {likes}</Text>
                <Text style={styles.shares}>Compart. {shares}</Text>
            </View>
            <ScrollView>
                <Text style={styles.text}>{text}</Text>
            </ScrollView>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.date}>Postado em: {date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: "gray",
    },
    text: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginVertical: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    likes: {
        fontSize: 18
    },
    shares: {
        fontSize: 18
    }
});
