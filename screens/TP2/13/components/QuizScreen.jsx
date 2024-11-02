import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const navigation = useNavigation();

    const questions = [
        { question: 'Qual linguagem é usada para estilizar páginas web?', options: ['HTML', 'CSS', 'JavaScript', 'Python'], answer: 'CSS' },
        { question: 'Qual destes é um banco de dados relacional?', options: ['MongoDB', 'PostgreSQL', 'Redis', 'Cassandra'], answer: 'PostgreSQL' },
        { question: 'Qual operador é usado para atribuir valor a uma variável em JavaScript?', options: ['==', '=', '===', '!='], answer: '=' },
        { question: 'Qual dos seguintes é um framework JavaScript para construir interfaces de usuário?', options: ['Laravel', 'React', 'Django', 'Flask'], answer: 'React' },
        { question: 'Qual comando Git é usado para copiar um repositório?', options: ['git push', 'git pull', 'git clone', 'git add'], answer: 'git clone' },
        { question: 'Qual destas linguagens é mais conhecida por ser usada no back-end?', options: ['CSS', 'HTML', 'JavaScript', 'Python'], answer: 'Python' },
        { question: 'Qual é o formato de arquivo usado para definir estilos em uma página web?', options: ['.html', '.css', '.js', '.json'], answer: '.css' },
        { question: 'Em qual linguagem usamos o comando `console.log()` para exibir uma mensagem?', options: ['Python', 'JavaScript', 'HTML', 'CSS'], answer: 'JavaScript' },
        { question: 'Qual comando Git é usado para salvar alterações no histórico?', options: ['git push', 'git commit', 'git pull', 'git branch'], answer: 'git commit' },
        { question: 'Qual das seguintes opções é uma linguagem de marcação?', options: ['HTML', 'Python', 'JavaScript', 'SQL'], answer: 'HTML' },
    ];


    function handleAnswer(selectedOption) {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            navigation.navigate("Result", { score: score + (selectedOption === questions[currentQuestion].answer ? 1 : 0), totalQuestions: questions.length });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{questions[currentQuestion].question}</Text>
            {questions[currentQuestion].options.map((option) => (
                <TouchableOpacity key={option} style={styles.optionButton} onPress={() => handleAnswer(option)}>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    question: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    optionButton: {
        backgroundColor: '#007bff',
        padding: 10,
        marginVertical: 5,
        width: '100%',
        borderRadius: 5
    },
    optionText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
});
