import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/HomeScreen";
import ResultsScreen from "./components/ResultsScreen";


import UserProvider from './UserContext';

const Stack = createStackNavigator();

export default function App() {
    return (
        <UserProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name={"Home"} component={HomeScreen} />
                    <Stack.Screen name={"Results"} component={ResultsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}
