import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Go to the grocery store</Text>
      <Text>Do homework</Text>
      {/* ... */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToDoList;
