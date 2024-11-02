import {Button, FlatList, View, Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React from "react";

const myPosts = [
    { id: '1', destination: 'Barcelona', startDate: '2023-06-10', endDate: '2023-06-20', rating: 5 },
    { id: '2', destination: 'Nova York', startDate: '2023-08-15', endDate: '2023-08-25', rating: 4 },
];

export default function MyFeed() {

    const navigation = useNavigation();
    function handleViewDetails(post) {
        navigation.navigate("PostDetails", {post});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minhas Postagens</Text>
            <FlatList
                data={myPosts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.post}>
                        <Text>{item.destination}</Text>
                        <Text>{`De: ${item.startDate} Até: ${item.endDate}`}</Text>
                        <Text>{`Nota: ${item.rating}`}</Text>
                        <Button title="Ver Detalhes" onPress={() => handleViewDetails(item)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    post: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});