import { View, Text } from 'react-native';
import List from "./components/List";

export default function App() {
    return (
        <View>
            <Text>Lista de Tarefas</Text>
            <List/>
        </View>
    )
}