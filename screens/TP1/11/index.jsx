import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        check() ? setResult("Palíndromo") : setResult("Não é Palíndromo");
    }, [inputValue]);

    function check() {
        const chars = inputValue.split("");
        const reverse = chars.reverse().join("");

        if (reverse === inputValue) {
            return true;
        }
        return false;
    }


    return (
        <View style={styles.container}>
            <Text>{result}</Text>
            <TextInput
                inputMode={"text"}
                value={inputValue}
                style={styles.input}
                placeholder={"Verificar Palíndromo"}
                onChangeText={setInputValue}
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