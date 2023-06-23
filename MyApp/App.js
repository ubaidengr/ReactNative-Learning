// Todo App Lec: 9

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState} from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'boy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'learn iOS', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (val) => {

    if(val.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: val, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      console.log('keyboard dismissed')
      Keyboard.dismiss()
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler = {submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
