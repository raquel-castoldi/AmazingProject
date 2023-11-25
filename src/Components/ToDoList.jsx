import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
    return (
      <ScrollView>
        {tasks.map((task, index) => (
            <Pressable key={index}>
                <View style={[styles.task]}>
                <Text style={[styles.taskText]}>Clean room</Text>
                </View>
            </Pressable>
            <Pressable key={index}>
                <View style={[styles.task]}>
                <Text style={[styles.taskText]}>Take a shower</Text>
                </View>
            </Pressable>
            <Pressable key={index}>
                <View style={[styles.task]}>
                <Text style={[styles.taskText]}>Go grocery shopping</Text>
                </View>
            </Pressable>
        ))}
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '##ff0397',
    },
    completed: {
      backgroundColor: '#ead1dc',
    },
    taskText: {
      fontSize: 16,
    },
});

export default ToDoList;
