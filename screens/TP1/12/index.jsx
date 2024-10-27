import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [birthDate, setBirthDate] = useState("");
    const [birthTime, setBirthTime] = useState("");
    const [result, setResult] = useState("");

    function checkAge() {
        const [day, month, year] = birthDate.split("/").map(Number);
        const [hour, minutes] = birthTime.split(":").map(Number);

        const birthDateTime = new Date(year, month -1, day, hour, minutes);
        const now = new Date();

        const age = {
            years: now.getFullYear() - birthDateTime.getFullYear(),
            month: now.getMonth() - birthDateTime.getMonth(),
            days: now.getDate() - birthDateTime.getDate(),
            hours: now.getHours() - birthDateTime.getHours(),
            minutes: now.getMinutes() - birthDateTime.getMinutes(),
        };

        if (age.minutes < 0) {
            age.hours--;
            age.minutes += 60;
        }
        if (age.hours < 0) {
            age.days--;
            age.hours += 24;
        }
        if (age.days < 0) {
            age.month--;
            age.days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
        if (age.months < 0) {
            age.years--;
            age.month += 12;
        }

        // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

        setResult(`Idade: ${age.years} anos, ${age.month} meses, ${age.days} dias, ${age.hours} horas e ${age.minutes} minutos.`)
    }

    return (
        <View style={styles.container}>
            <Text>{result}</Text>
            <TextInput
                inputMode={"text"}
                value={birthDate}
                style={styles.input}
                placeholder={"Data do Nascimento Ex: Dia/Mês/Ano"}
                onChangeText={setBirthDate}
            />
            <TextInput
                inputMode={"text"}
                value={birthTime}
                style={styles.input}
                placeholder={"Hora do Nascimento Ex: 10:50"}
                onChangeText={setBirthTime}
            />

            <Button title={"Calcular"} onPress={checkAge}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    input: {
        width: "70%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    }
})