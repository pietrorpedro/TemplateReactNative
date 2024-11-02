import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import AcademicScreen from "./components/AcademicScreen";
import ContactScreen from "./components/ContactScreen";
import GoalsScreen from "./components/GoalsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen
                    name={"Contact"}
                    component={ContactScreen}
                    options={{
                        title: "Contato",
                        tabBarLabel: () => null,
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcons name="contact-emergency" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name={"Academic"}
                    component={AcademicScreen}
                    options={{
                        title: "Escolaridade",
                        tabBarLabel: () => null,
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="school" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name={"Goals"}
                    component={GoalsScreen}
                    options={{
                        title: "Resumo",
                        tabBarLabel: () => null,
                        tabBarIcon: ({color, size}) => (
                            <Feather name="target" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}