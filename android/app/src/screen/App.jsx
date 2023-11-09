import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {
  return (
    <View style={styles.container}>
      <ToDoList />

      <ToDoForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
