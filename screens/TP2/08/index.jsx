import { View, Text } from 'react-native';
import Contact from "./components/Contact";
import List from "./components/List";

export default function App() {

    const contacts = [
        {
            avatar: "https://i.pinimg.com/564x/29/55/59/295559e87b67fde4bbd5d5049d67e678.jpg",
            name: "Fulano da Silva",
            address: "Rua Bonita, 49",
            number: "00 0 0000-0000"
        },
        {
            avatar: "https://i.pinimg.com/564x/29/55/59/295559e87b67fde4bbd5d5049d67e678.jpg",
            name: "Ciclano Souza",
            address: "Avenida Alegre, 123",
            number: "11 1 1111-1111"
        },
        {
            avatar: "https://i.pinimg.com/564x/29/55/59/295559e87b67fde4bbd5d5049d67e678.jpg",
            name: "Beltrano Oliveira",
            address: "Praça Central, 456",
            number: "22 2 2222-2222"
        },
        {
            avatar: "https://i.pinimg.com/564x/29/55/59/295559e87b67fde4bbd5d5049d67e678.jpg",
            name: "Maria Ferreira",
            address: "Rua das Flores, 789",
            number: "33 3 3333-3333"
        }
    ];

    return (
        <View>
            <List
                contacts={contacts}
            />
        </View>
    )
}