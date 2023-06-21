// Lec 4. State and Hooks
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'

export default function App() {

  const [name, setName] = useState('ubaid');
  const [person, setPerson] = useState({name: 'mario', age: 30});

  const clickHandler = () => {
    setName('Ali')
    setPerson({name: 'Ahsan', age: 40})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <Text></Text>
      <View style = {styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} /> 
      </View>
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
  buttonContainer: {
    marginTop: 20
  }
});
