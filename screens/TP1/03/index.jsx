import { View, Text } from 'react-native';
import Botao from "./Button";
import {useState} from "react";

export default function App() {

    const [color, setColor] = useState("Nome da Cor");


    return (
        <View>
            <Text>{color}</Text>
            <Botao
                text={"Vermelho"}
                onPress={() => setColor("Vermelho")}
            />
            <Botao
                text={"Verde"}
                onPress={() => setColor("Verde")}
            />
            <Botao
                text={"Azul"}
                onPress={() => setColor("Azul")}
            />
        </View>
    )
}