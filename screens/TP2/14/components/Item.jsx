import {View, Text, StyleSheet} from "react-native";

export default function Item({title, category}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.category}>{category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "gray",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 16
    },
})