import { View, Text } from 'react-native';

export default function App() {
    const time = new Date().toLocaleTimeString();

    return (
        <View>
            <Text>Olá, Pietro Rodrigues Pedro! Agora são {time}</Text>
        </View>
    )
}