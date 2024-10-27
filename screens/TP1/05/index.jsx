import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from "react";

export default function App() {

    const [number, setNumber] = useState(0);

    return (
        <View>
            <Text style={style.title}>{number}</Text>
            <View style={style.buttons}>
                <TouchableOpacity onPress={() => setNumber(number + 1)} style={style.button}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNumber(number - 1)} style={style.button}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        textAlign: "center",
        marginVertical: 20
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 20
    },
    button: {
        flex: 1,
        backgroundColor: "#2196F3",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 5,
    }

})