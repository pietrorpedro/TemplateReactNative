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
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    item: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginHorizontal: 5,
        fontSize: 22,
        maxWidth: 150,
    }
})