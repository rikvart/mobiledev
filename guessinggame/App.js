import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
const [text, setText] = useState('');
const [value, setValue] = useState(0);
const [count, setCount] = useState(0);
const [rndnum, setRndnum] = useState(0);

useEffect(() => resetGame(), [])

const resetGame = () => {
  setRndnum(Math.floor(Math.random() * 100) + 1)
  setCount(1)
  setValue(0)

}

const makeGuess = () => {
  if (rndnum === parseInt(value)) {
    Alert.alert(`you guessed the number in ${count} guesses`);
    resetGame();
  }
  else if (rndnum < parseInt(value)) {
    setText(`Your guess ${value} is too low`);
  }
  else {
    setText(`your guess ${value} is too high`)
  }
}


  return (
    <View style={styles.parent}>
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Guess number between 1-100.</Text>
      <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1, margin: 10 }} numericvalue keyboardType={'numeric'} value={value} onChangeText={value => setValue(value)} />
      <Text>{text}</Text>
    </View>
    <View style={styles.buttons}>
      <Button style={ styles.button } title="Make guess" onPress={makeGuess} />
    </View>
    <StatusBar style="auto" />
  </View>
);
}
 



const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    flex: 1.3,
    justifyContent: 'center',
  },
  buttons: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  history: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  }
});