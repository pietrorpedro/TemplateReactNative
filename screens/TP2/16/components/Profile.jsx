import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil do Usuário</Text>
            <Text>Nome: Pietro Rodrigues</Text>
            <Text>Email: pietrorpedro@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});