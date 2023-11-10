import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView>
        <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={[styles.taskText]}>Clean room</Text>
            </View>
        </Pressable>
        <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={[styles.taskText]}>Take a shower</Text>
            </View>
        </Pressable>
         <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={[styles.taskText]}>Go grocery shopping</Text>
            </View>
         </Pressable>
    </ScrollView>
  );
};

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
