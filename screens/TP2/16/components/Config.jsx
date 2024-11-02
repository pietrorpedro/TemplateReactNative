import { View, Text, Button, StyleSheet } from 'react-native';

export default function Config() {

    function handleChangePassword() {
        alert("Alterar Senha pressionado");
    }

    function handleNotifications() {
        alert("Notificações pressionado");
    }

    function handlePrivacy() {
        alert("Privacidade pressionado");
    }

    function handleAbout()  {
        alert("Sobre pressionado");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>
            <Button title="Alterar Senha" onPress={handleChangePassword} />
            <Button title="Notificações" onPress={handleNotifications} />
            <Button title="Privacidade" onPress={handlePrivacy} />
            <Button title="Sobre" onPress={handleAbout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});