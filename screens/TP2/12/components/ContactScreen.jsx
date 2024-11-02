import {View, Text, StyleSheet, Image, ScrollView} from "react-native";

import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ContactScreen() {
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.img}
                source={{uri: "https://media.licdn.com/dms/image/v2/D4D03AQGVPmVixWIRGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726006157049?e=1735776000&v=beta&t=atyU42470mWc8PizGojhUrNuG9IHOMV2QYSP6qTOQEw"}}
            />
            <Text style={styles.name}>Pietro Rodrigues Pedro</Text>
            <Text style={styles.address}>Porto Alegre, Rio Grande do Sul</Text>
            <View style={styles.row}>
                <Foundation name="telephone" size={24} color="black" />
                <Text style={styles.number}>51 98299-3394</Text>
            </View>
            <View style={styles.row}>
                <MaterialIcons name="email" size={24} color="black" />
                <Text style={styles.email}>pietrorpedro@gmail.com</Text>
            </View>
            <Text style={styles.bio}>
                Apaixonado por tecnologia e impulsionado pelo desejo de inovar,
                atualmente estou cursando Bacharelado em Engenharia de Software no Instituto Infnet.
                Com uma base sólida como Técnico em Informática, possuo um conjunto forte de habilidades em Javascript, React, PHP e Java.
            </Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    img: {
        width: "100%",
        height: 300,
        resizeMode: "contain"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 5
    },
    name: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    },
    address: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
    },
    number: {
        fontSize: 16
    },
    email: {
        fontSize: 16
    },
    bio: {
        fontSize: 16,
        textAlign: "justify",
        marginTop: 20
    },
})