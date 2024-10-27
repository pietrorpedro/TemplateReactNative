import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from "react-native-paper";

export default function App() {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Image
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/pt/2/2a/Deadpool_%26_Wolverine_cartaz.jpg" }}
                    style={styles.image}
                />
                <Text style={styles.title}>Deadpool & Wolverine</Text>
                <View>
                    <Text style={styles.cinema}>GNC Praia de Belas</Text>
                    <View style={styles.schedules}>
                        <Text style={styles.schedule}>13:20</Text>
                        <Text style={styles.schedule}>15:20</Text>
                        <Text style={styles.schedule}>17:30</Text>
                        <Text style={styles.schedule}>19:40</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    card: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 300,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cinema: {
        fontSize: 16,
        marginBottom: 8,
    },
    schedules: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
    },
    schedule: {
        backgroundColor: "#2196F3",
        padding: 10,
        fontSize: 15,
        borderRadius: 10,
        color: '#fff',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
        borderRadius: 8,
    },
})
