import {Button, FlatList, View, Text, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const friendsPosts = [
    { id: '1', destination: 'Paris', startDate: '2023-09-01', endDate: '2023-09-10', rating: 5 },
    { id: '2', destination: 'Tokyo', startDate: '2023-10-05', endDate: '2023-10-15', rating: 4 },
];

export default function Feed() {

    const navigation = useNavigation();

    function handleViewDetails(post) {
        navigation.navigate("PostDetails", {post})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Feed dos Amigos</Text>
            <FlatList
                data={friendsPosts}
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
