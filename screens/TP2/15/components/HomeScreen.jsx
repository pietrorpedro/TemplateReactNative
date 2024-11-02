import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { UserContext } from '../UserContext';

const movies = [
    'A Origem',
    'Matrix',
    'Interstellar',
    'Pulp Fiction',
    'O Senhor dos Anéis: A Sociedade do Anel',
    'A Rede Social',
    'Os Vingadores',
    'Gladiador',
    'Coringa',
    'Forrest Gump'
];

export default function HomeScreen({ navigation }) {
    const { addPreference } = useContext(UserContext);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    function handleResponse(liked) {
        addPreference(movies[currentMovieIndex], liked);
        if (currentMovieIndex < movies.length - 1) {
            setCurrentMovieIndex(currentMovieIndex + 1);
        } else {
            navigation.navigate('Results');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, textAlign: "center", marginVertical: 20 }}>{movies[currentMovieIndex]}</Text>
            <Button title="Gosto" onPress={() => handleResponse(true)} />
            <Button title="Não Gosto" onPress={() => handleResponse(false)} />
            <Button title="Ver Resultados" onPress={() => navigation.navigate('Results')} />
        </View>
    );
};

// dps de um tempo a gente começa a usar style in line :clown:
