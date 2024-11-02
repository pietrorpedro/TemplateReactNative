import {View, StyleSheet, Text, ScrollView, Image} from "react-native";

export default function DetailsScreen({route}) {

    const { cart } = route.params;

    const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);

    return (
        <ScrollView style={styles.container}>
            {cart.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <Image
                        style={styles.photo}
                        source={{uri: item.photo}}
                    />
                    <View style={styles.info}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>R$ {item.price}</Text>
                    </View>
                </View>
            ))}

            <Text>Total: R${total}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
    },
    itemContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        flexDirection: "row",
        marginBottom: 10
    },
    photo: {
        width: 100,
        height: 100
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
    },
    price: {
        fontSize: 18,
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    info: {
        flex: 1,
        flexDirection: "column",
        position: "relative",
    },

});
