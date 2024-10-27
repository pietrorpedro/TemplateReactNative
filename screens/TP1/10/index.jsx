import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [number, setNumber] = useState(0);
    const [result, setResult] = useState("");

    useEffect(() => {
        isPrime(number) ? setResult("Número Primo") : setResult("Não é Primo");
    }, [number])

    function isPrime(num) {
        if (num <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    return (
        <View style={styles.container}>
            <Text>{result}</Text>
            <TextInput
                inputMode={"numeric"}
                value={number}
                style={styles.input}
                placeholder={"Verificar Número"}
                onChangeText={setNumber}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    input: {
        width: "50%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginVertical: 20
    }
})