import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [firstValue, setFirstValue] = useState(null);
    const [secondValue, setSecondValue] = useState(null);
    const [result, setResult] = useState(null);

    function calculate(type) {
        if (type === "+") {
            setResult(Number(firstValue) + Number(secondValue));
        }
        if (type === "-") {
            setResult(Number(firstValue) - Number(secondValue));
        }
        if (type === "*") {
            setResult(Number(firstValue) * Number(secondValue));
        }
        if (type === "/") {
            setResult(Number(firstValue) / Number(secondValue));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>{result}</Text>

                <TextInput
                    inputMode={"numeric"}
                    value={firstValue}
                    style={styles.input}
                    placeholder={"Primeiro Valor"}
                    onChangeText={setFirstValue}
                />
                <TextInput
                    inputMode={"numeric"}
                    value={secondValue}
                    style={styles.input}
                    placeholder={"Segundo Valor"}
                    onChangeText={setSecondValue}
                />

                <View style={styles.buttons}>
                    <Button title={"+"} onPress={() => calculate("+")}/>
                    <Button title={"-"} onPress={() => calculate("-")}/>
                    <Button title={"*"} onPress={() => calculate("*")}/>
                    <Button title={"/"} onPress={() => calculate("/")}/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        marginVertical: 10
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
        marginVertical: 10,
    },
    input: {
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    buttons: {
        gap: 10,
        marginVertical: 20
    }
});