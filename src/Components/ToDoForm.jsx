import React, { useState, useEffect }from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
        try {
            const response = await fetch('./data/tasks.json');
            const data = await response.json();
            setTasks(data;)
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleAddTask = () => {
        if (task.trim() !== '') {
         addTask(task);
         setTask('');
        }
    };

    const handleGenerateRandomTask = () => {
        if (tasks.length > 0) {
          const randomIndex = Math.floor(Math.random() * tasks.length);
          const randomTask = tasks[randomIndex].task;
          setSelectedTask(randomTask);
        }
      };

  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
        />
       <Button title="Add Task" onPress={() => addTask(taskText)} />
       <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />

    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '##ff0397',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;

