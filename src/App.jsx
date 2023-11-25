import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator();

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
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Navigator>
        <SafeAreaView>
            <h1>My Amazing To-Do App </h1>
            <ToDoForm />
            <ToDoList tasks={tasks} />
        </SafeAreaView>
    <NavigationContainer>
    );
}

export default App;
