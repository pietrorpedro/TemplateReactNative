import {View, StyleSheet, ScrollView} from 'react-native';
import Post from "./Post";
import {useEffect, useState} from "react";

export default function ListScreen() {
    const [posts, setPosts] = useState([
        {
            title: "Primeiro Item",
            summary: "Um resumo sobre o primeiro post.",
            likes: 12,
            shares: 3,
            text: "Este é o texto completo do primeiro post. Aqui você pode encontrar detalhes e reflexões sobre o tema abordado.",
            author: "Autor 1",
            date: "2024-11-01"
        },
        {
            title: "Segundo Item",
            summary: "Um resumo do segundo post que fala sobre tecnologia.",
            likes: 25,
            shares: 7,
            text: "No segundo post, exploramos as últimas tendências em tecnologia e como elas estão moldando o futuro.",
            author: "Autor 2",
            date: "2024-11-02"
        },
        {
            title: "Terceiro Item",
            summary: "Uma breve visão sobre viagens e aventuras.",
            likes: 8,
            shares: 2,
            text: "Neste post, compartilho minhas experiências de viagem e as aventuras que vivi ao redor do mundo.",
            author: "Autor 3",
            date: "2024-11-03"
        },
        {
            title: "Quarto Item",
            summary: "Discussão sobre saúde e bem-estar.",
            likes: 30,
            shares: 10,
            text: "Aqui falamos sobre a importância da saúde mental e algumas dicas para manter um equilíbrio saudável na vida.",
            author: "Autor 4",
            date: "2024-11-04"
        }
    ])

    return (
        <ScrollView>
            <View style={styles.container}>
                {posts.map((post, index) => (
                    <View style={styles.item} key={index}>
                        <Post
                            title={post.title}
                            summary={post.summary}
                            likes={post.likes}
                            shares={post.shares}
                            text={post.text}
                            author={post.author}
                            date={post.date}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
    },
    item: {
        marginVertical: 10
    }
});
