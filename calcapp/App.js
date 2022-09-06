import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);



  const calcAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
    
  }

  const calcDeduct = () => {
    setResult(parseFloat(num1) - parseFloat(num2));

  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChange={num1 => setNum1(num1)}  value={String(num1)} className="textinput"></TextInput>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChange={num2 => setNum2(num2)} value={String(num2)} className="textinput"></TextInput>
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
