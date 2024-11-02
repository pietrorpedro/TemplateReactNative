import { View, Text, StyleSheet } from 'react-native';

export default function List({items}) {
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <Text key={index} style={styles.item}>{item}</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
    },
    item: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        fontSize: 20,
        width: "100%",
        marginVertical: 5,
        textAlign: "center",
    }
})