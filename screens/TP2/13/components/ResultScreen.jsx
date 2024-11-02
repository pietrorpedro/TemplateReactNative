import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
    const { score, totalQuestions } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado Final</Text>
            <Text style={styles.score}>Pontuação: {score} de {totalQuestions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20
    },
    score: {
        fontSize: 22
    },
});
