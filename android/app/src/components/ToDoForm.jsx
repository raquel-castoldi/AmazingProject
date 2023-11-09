import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter task" />
      <Button title="Add Task" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
  },
});

export default ToDoForm;

