// lecture 6. ListView Scrollview

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react'

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigui', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);

  return (
    <View style={styles.container}>

    <ScrollView>
      { people.map(item => (
          <View key={item.key}>
            <Text style = {styles.item}>{item.name}</Text>
          </View>
        )
      ) }
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
