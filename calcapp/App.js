import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);



  const calcAdd = () => {
    const resultPlus = num1 + num2;

    setResult(parseInt(num1) + parseInt(num2));
    console.log(num1);
    console.log(result);
    
  }

  const calcDeduct = () => {
    const resultMinus = num1 - num2;
    setResult(Number(num1) + Number(num2));

  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChange={setNum1}  value={num1} className="textinput"></TextInput>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} onChange={setNum2} value={num2} className="textinput"></TextInput>
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
