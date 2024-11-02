import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import Item from "./Item";

export default function List() {

    const [text, setText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const categories = ["Mercado", "Farmacia", "Estudo", "Lazer"];

    useEffect(() => {
        if (selectedCategory) {
            setFilteredItems(items.filter((item) => item.category === selectedCategory));
        } else {
            setFilteredItems(items);
        }
    }, [items, selectedCategory]);

    function handleAdd() {
        setItems((prev) => [...prev, { text, category: selectedCategory }]);
        setText("");
        setSelectedCategory("");
    }

    function handleFilter(category) {
        setSelectedCategory(category);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <TextInput
                    placeholder="Título da Tarefa"
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                />

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                        style={styles.select}
                    >
                        <Picker.Item label="Selecione uma Categoria" value="" />
                        <Picker.Item label="Mercado" value="Mercado" />
                        <Picker.Item label="Farmácia" value="Farmacia" />
                        <Picker.Item label="Estudo" value="Estudo" />
                        <Picker.Item label="Lazer" value="Lazer" />
                    </Picker>
                </View>

                <Button title="Adicionar" onPress={handleAdd} />
            </View>

            <Text style={styles.title}>Filtrar</Text>
            <View style={styles.buttons}>
                <Button title="Todas" onPress={() => handleFilter("")} />
                {categories.map((category, index) => (
                    <Button
                        title={category}
                        key={index}
                        onPress={() => handleFilter(category)}
                    />
                ))}
            </View>

            <View>
                {filteredItems.map((item, index) => (
                    <Item
                        title={item.text}
                        category={item.category}
                        key={index}
                    />
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    inputs: {
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 20
    },
    input: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "gray"
    },
    select: {
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 10
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20
    },
});
