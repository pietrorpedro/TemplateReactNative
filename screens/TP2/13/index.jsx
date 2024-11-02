import { View, Text } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name={"Quiz"} component={QuizScreen} options={{title: "Quiz"}} />
                <Stack.Screen name={"Result"} component={ResultScreen} options={{title: "Resultado"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}