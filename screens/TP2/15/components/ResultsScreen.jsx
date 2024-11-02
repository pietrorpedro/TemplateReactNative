import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { UserContext } from '../UserContext';

export default function ResultsScreen() {
    const { calculateAffinity } = useContext(UserContext);
    const usersWithAffinity = calculateAffinity();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Usuários com gostos semelhantes:</Text>
            <FlatList
                data={usersWithAffinity}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text>{item.name} - Afinidade: {(item.affinityLevel * 100).toFixed(0)}%</Text>
                )}
            />
            {usersWithAffinity.length === 0 && <Text>Nenhum usuário encontrado.</Text>}
        </View>
    );
};