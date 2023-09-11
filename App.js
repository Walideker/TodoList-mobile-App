import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input === '') {
      alert('You have to write something');
      return;
    }
    const newTodo = {
      id: Math.random().toString(),
      todo: input,
    };
    setList([...list, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const updatedList = list.filter((todo) => todo.id !== id);
    setList(updatedList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          onChangeText={(text) => setInput(text)}
          value={input}
          style={styles.textInput}
          placeholder='Your goal'
        />
        <Button   title='Add a goal' onPress={addTodo} />
      </View>
      <View>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text>{item.todo}</Text>
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 60,
    
  },
  button :{
    color:'green',

  },
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius:4 ,
    width: '80%',
    textAlign: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});
