// lecture 5. Text Inpus

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react'

export default function App() {

  const [name, setName] = useState('ubaid');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText = {(val) => {setName(val)}} />

      <Text>Enter Age</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 30'
        onChangeText = {(val) => {setAge(val)}} />
      <Text>My name is {name}</Text>
      <Text>My age is {age}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
