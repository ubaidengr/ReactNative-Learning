// Todo App Lec: 9

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';
import Header from './components/header';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'boy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'learn iOS', key: '3'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
