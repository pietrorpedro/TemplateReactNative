import { View, Text, Button, StyleSheet } from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function PostDetails({route}) {

    const {post} = route.params;
    const navigation = useNavigation();

    function handleLike() {
        alert("Publicação curtida");
        // conta? kkkkk
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes da Postagem</Text>
            <Text>{`Destino: ${post.destination}`}</Text>
            <Text>{`De: ${post.startDate} Até: ${post.endDate}`}</Text>
            <Text>{`Nota: ${post.rating}`}</Text>
            <View style={styles.buttons}>
                <Button title="Curtir" onPress={handleLike} />
                <Button title="Voltar" onPress={() => navigation.goBack()} />
            </View>
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
        marginBottom: 20,
    },
    buttons: {
        marginTop: 10,
        gap: 20
    },
});
