import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import AcademicScreen from './components/AcademicScreen';
import ContactScreen from './components/ContactScreen';
import GoalsScreen from './components/GoalsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Contact">
                <Drawer.Screen
                    name="Contact"
                    component={ContactScreen}
                    options={{
                        title: "Contato",
                        drawerIcon: ({ color }) => (
                            <MaterialIcons name="contact-emergency" size={24} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Academic"
                    component={AcademicScreen}
                    options={{
                        title: "Escolaridade",
                        drawerIcon: ({ color }) => (
                            <Ionicons name="school" size={24} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Goals"
                    component={GoalsScreen}
                    options={{
                        title: "Resumo",
                        drawerIcon: ({ color }) => (
                            <Feather name="target" size={24} color={color} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
