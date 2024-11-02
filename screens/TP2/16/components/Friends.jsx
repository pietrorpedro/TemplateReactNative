import { View, Text, FlatList, StyleSheet } from 'react-native';

const friendsList = [
    { id: '1', name: 'João' },
    { id: '2', name: 'Maria' },
    { id: '3', name: 'Pedro' },
];

export default function Friends() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Amigos</Text>
            <FlatList
                data={friendsList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.friend}>
                        <Text>{item.name}</Text>
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
    friend: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});