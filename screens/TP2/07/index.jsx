import { View, Text, StyleSheet } from 'react-native';
import List from "./components/List";

export default function App() {

    const items = [
        "Passear com os cachorros",
        "Limpar a casa",
        "Fazer o almoço",
        "Trabalhar",
        "Estudar",
        "Ir ao mercado",
        "Exercícios",
        "Ler um livro"
    ];

    return (
        <View style={styles.container}>
            <List items={items}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})