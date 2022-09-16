import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);


  const calcAdd = () => {
    setResult(Number(num1) + Number(num2));
    
  }

  const calcDeduct = () => {
    setResult(Number(num1) - Number(num2));

  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChangeText={value => setNum1(value)}  value={num1} className="textinput"></TextInput>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChangeText={value => setNum2(value)} value={num2} className="textinput"></TextInput>
      <Button title="+" onPress={calcAdd} /><Button title="-" onPress={calcDeduct} />
      <StatusBar style="auto" />
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
  textinput: {
    borderWidth: '1px',
    borderColor: 'black'
  }
});
