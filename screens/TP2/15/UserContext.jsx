import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [preferences, setPreferences] = useState([]);
    const [users] = useState([
        { id: 1, name: 'Alice', preferences: [['A Origem', true], ['Matrix', false], ['Coringa', true]] },
        { id: 2, name: 'Bob', preferences: [['A Origem', true], ['Pulp Fiction', true], ['Gladiador', true]] },
        { id: 3, name: 'Charlie', preferences: [['Matrix', true], ['Interstellar', false], ['Forrest Gump', true]] },
        { id: 4, name: 'Daniel', preferences: [['A Rede Social', true], ['Os Vingadores', false], ['Coringa', true]] },
        { id: 5, name: 'Eva', preferences: [['Gladiador', true], ['Matrix', true], ['A Origem', false]] },
    ]);

    function addPreference(item, liked) {
        setPreferences((prev) => [...prev, { item, liked }]);
    };

    function calculateAffinity() {
        if (preferences.length === 0) return [];

        return users.map(user => {
            const totalItems = preferences.length;
            let similarItems = 0;

            preferences.forEach(({ item, liked }) => {
                const userPreference = user.preferences.find(p => p[0] === item);
                if (userPreference && userPreference[1] === liked) {
                    similarItems++;
                }
            });

            const affinityLevel = similarItems / totalItems;
            return { id: user.id, name: user.name, affinityLevel };
        }).filter(user => user.affinityLevel > 0).sort((a, b) => b.affinityLevel - a.affinityLevel);
    };

    return (
        <UserContext.Provider value={{ preferences, addPreference, calculateAffinity }}>
            {children}
        </UserContext.Provider>
    );
};

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
