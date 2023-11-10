import React from 'react';
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
    return (
        <SafeAreaView>
               <h1>My Amazing To-Do App </h1>
               <ToDoForm />
               <ToDoList />
        </SafeAreaView>
    );
}

export default App;
