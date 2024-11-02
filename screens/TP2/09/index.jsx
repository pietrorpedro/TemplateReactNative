import { View, StyleSheet } from "react-native";
import ListScreen from "./components/ListScreen";
import DetailsScreen from "./components/DetailsScreen";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {


    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name={"List"}
                    component={ListScreen}
                />
                <Stack.Screen
                    name={"Details"}
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
