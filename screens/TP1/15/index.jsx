import {View, Text, Button, StyleSheet} from 'react-native';
import {useState} from "react";

export default function App() {

    const questions = [
        {
            question: "Qual é a capital da França?",
            options: ["Paris", "Londres", "Berlim", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Qual é a maior montanha do mundo?",
            options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
            answer: "Everest",
        },
        {
            question: "Qual é a língua oficial do Brasil?",
            options: ["Espanhol", "Inglês", "Português", "Francês"],
            answer: "Português",
        },
        {
            question: "Qual é o elemento químico com o símbolo H?",
            options: ["Hélio", "Hidrogênio", "Oxigênio", "Carbono"],
            answer: "Hidrogênio",
        },
        {
            question: "Quem pintou a Mona Lisa?",
            options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
            answer: "Da Vinci",
        },
        {
            question: "Qual é o planeta mais próximo do Sol?",
            options: ["Terra", "Marte", "Vênus", "Mercúrio"],
            answer: "Mercúrio",
        },
        {
            question: "Qual é a moeda oficial do Japão?",
            options: ["Yuan", "Won", "Dólar", "Iene"],
            answer: "Iene",
        },
        {
            question: "Qual é o continente mais populoso?",
            options: ["África", "América", "Ásia", "Europa"],
            answer: "Ásia",
        },
        {
            question: "Qual é a fórmula da água?",
            options: ["CO2", "H2O", "O2", "H2SO4"],
            answer: "H2O",
        },
        {
            question: "Quem escreveu 'Dom Casmurro'?",
            options: ["Machado de Assis", "Jorge Amado", "Clarice Lispector", "Graciliano Ramos"],
            answer: "Machado de Assis",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    function handleAnswer(option) {
        if (option === questions[currentQuestion].answer) {
            setScore(score+1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((currentQuestion + 1));
        }else {
            setFinished(true);
        }

    }

    function restartQuiz() {
        setCurrentQuestion(0);
        setScore(0);
        setFinished(false);
    }

    return (
        <View style={styles.container}>
            {finished ? (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Você acertou {score} de {questions.length} perguntas!</Text>
                    <Button title="Recomeçar Quiz" onPress={restartQuiz} />
                </View>
            ) : (
                <View style={styles.quizContainer}>
                    <Text style={styles.question}>{questions[currentQuestion].question}</Text>
                    {questions[currentQuestion].options.map((option, index) => (
                        <Button
                            key={index}
                            title={option}
                            onPress={() => handleAnswer(option)}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    quizContainer: {
        width: '100%',
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    resultContainer: {
        alignItems: 'center',
    },
    resultText: {
        fontSize: 20,
        marginBottom: 20,
    },
});