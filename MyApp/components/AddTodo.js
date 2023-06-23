import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React, {useState} from 'react'

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHanlder = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style = {styles.input}
                placeholder='New Todo ...'
                onChangeText={changeHanlder}
            />
            <Button 
                onPress={() => submitHandler(text)}
                title='add Todo'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})