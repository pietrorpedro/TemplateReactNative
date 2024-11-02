import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function Item({title, desc, price, photo, addToCart}) {

    function handlePress() {
        addToCart({title, desc, price, photo});
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.photo}
                source={{uri: photo}}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Text style={styles.price}>R$ {price}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
                <Image
                    style={styles.btnImage}
                    source={{uri: "https://static.thenounproject.com/png/1649999-200.png"}}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "gray",
        position: "relative",
    },
    btn: {
        position: "absolute",
        right: 5,
        top: 5,
    },
    btnImage: {
        width: 40,
        height: 40,
    },
    photo: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    info: {
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    desc: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        marginTop: 15
    }
});