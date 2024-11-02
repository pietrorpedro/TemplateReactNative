import {View, StyleSheet, Text} from "react-native";

export default function AcademicScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.history}>
                <Text style={styles.title}>Instituto Infnet</Text>
                <Text style={styles.subtitle}>Bacharelado em Engenharia de Software</Text>
                <Text style={styles.bio}>O curso técnico em Informática para a Internet é um dos destaques da instituição. Ele foi desenvolvido para atender às demandas crescentes da indústria de tecnologia, especialmente voltadas para a internet e a criação de aplicações online.</Text>
                <Text style={styles.date}>2024 - Em andamento</Text>
            </View>
            <View style={styles.history}>
                <Text style={styles.title}>Senac Distrito Criativo</Text>
                <Text style={styles.subtitle}>Técnico em Informática para a Internet</Text>
                <Text style={styles.bio}>O Instituto Infnet é reconhecido como um dos principais colégios de tecnologia e design digital no país, tendo formado gerações de profissionais bem-sucedidos e respeitados em ambas as indústrias.</Text>
                <Text style={styles.date}>2021 - 2023</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "column",
        gap: 10
    },
    history: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 26,
    },
    subtitle: {
        fontSize: 20
    },
    bio: {
        fontSize: 15,
        marginVertical: 10,
        textAlign: "justify"
    },
    date: {
        marginTop: 20
    },
})