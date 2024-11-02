import {View, StyleSheet, TouchableOpacity, Image} from "react-native";
import ListScreen from "./components/ListScreen";
import DetailsScreen from "./components/DetailsScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useState} from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart((prev) => [...prev, item]);
    }

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name={"List"}
                    children={(props) => (
                        <ListScreen {...props} addToCart={addToCart} />
                    )}
                    options={({navigation}) => ({
                        title: "Lista de Items",
                        headerRight: () => (
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.navigate("Details", { cart })}
                            >
                                <Image
                                    style={styles.btnImage}
                                    source={{uri: "https://cdn3.iconfinder.com/data/icons/feather-5/24/shopping-cart-512.png"}}
                                />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name={"Details"}
                    component={DetailsScreen}
                    initialParams={{cart}}
                    options={{title: "Carrinho",}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    btnImage: {
        width: 40,
        height: 40
    },
});
