import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {

    const [tasks, setTasks] = useState([
        'Clean room',
        'Take a shower',
        'Go grocery shopping'
    ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText])
    };

    return (
        <SafeAreaView>
               <h1>My Amazing To-Do App </h1>
               <ToDoForm />
               <ToDoList tasks={tasks} />
        </SafeAreaView>
    );
}

export default App;
