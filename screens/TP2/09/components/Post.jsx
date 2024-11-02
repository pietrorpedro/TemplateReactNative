import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function Post(
    {
        title, summary, likes, shares, text, author, date
    }) {

    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate("Details", { title, summary, likes, shares, text, author, date });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.summary}>{summary}</Text>
            <View style={styles.public}>
                <Text style={styles.likes}>Curtidas {likes}</Text>
                <Text style={styles.shares}> Compart. {shares}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    public: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    summary: {
        fontSize: 18
    },
    likes: {
        fontSize: 18
    },
    shares: {
        fontSize: 18
    }
});