import { View, Text } from 'react-native';

export default function App() {
    const tempo = new Date().toLocaleTimeString();

    return (
        <View>
            <Text>Olá, Pietro Rodrigues Pedro! Agora são {tempo}</Text>
        </View>
    )
}