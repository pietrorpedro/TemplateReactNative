import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask() {
        setTasks([...tasks, task]);
        setTask("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    inputMode={"text"}
                    value={task}
                    style={styles.input}
                    placeholder={"Título da tarefa"}
                    onChangeText={setTask}
                />

                <Button title={"Adicionar"} onPress={addTask}/>
            </View>

            <View style={styles.tasksContainer}>
                {tasks.map((task, index) => (
                    <Text key={index} style={styles.task}>{task}</Text>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "100%",
    },
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
        marginVertical: 10,
    },
    input: {
        width: "100%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    tasksContainer: {
        width: "80%",
        alignItems: "flex-start",
    },
});