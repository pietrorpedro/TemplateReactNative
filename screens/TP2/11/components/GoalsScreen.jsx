import {View, Text, StyleSheet, ScrollView} from "react-native";

export default function GoalsScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                Sou apaixonado por tecnologia e atualmente curso Bacharelado em Engenharia de Software no Instituto Infnet, onde desenvolvo habilidades em Java, C#, PHP e Spring Boot.
            </Text>
            <Text style={styles.text}>
                Antes disso, completei o Ensino Médio com especialização em Técnico em Informática para a Internet no Senac Brasil. O Senac é conhecido por sua abordagem interdisciplinar e prepara os alunos para as demandas do mercado, especialmente na criação de aplicações online.
            </Text>
            <Text style={styles.text}>
                Estou sempre buscando inovar e me aprimorar no campo da tecnologia.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 18,
        textAlign: "justify",
        marginBottom: 10
    },
})