import {View, Text, StyleSheet, Image} from 'react-native';

export default function Contact({avatar, name, address, number}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{uri: avatar}}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.number}>{number}</Text>
            </View>
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
    },
    avatar: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    info: {
        flexDirection: 'column',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    address: {
        fontSize: 18
    },
    number: {
        fontSize: 18,
        marginTop: 15
    }
});