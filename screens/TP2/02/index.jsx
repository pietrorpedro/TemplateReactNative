import { View, Text } from 'react-native';
import List from "./components/List";

export default function App() {

    const items = [
        "Passear com os cachorros",
        "Limpar a casa",
        "Fazer o almoço"
    ];

    return (
        <View>
            <List items={items}/>
        </View>
    )
}