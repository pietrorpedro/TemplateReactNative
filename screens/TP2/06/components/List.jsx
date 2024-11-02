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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: '100%',
    },
    item: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        fontSize: 20,
        width: "100%",
        margin: 10,
        textAlign: "center",
    }
})