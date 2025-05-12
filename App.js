import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [fiveMinutes, setFiveMinutes] = useState(0)
  const [oneMinutes, setOneMinutes] = useState(0)
  const [oneHours, setOneHours] = useState(0)
  const [eightHours, setEightHours] = useState(0)
  const [result, setResult] = useState()

  console.log('result', result);

  const days = Math.floor(result / 1440);
  const hours = Math.floor((result % 1440) / 60);
  const minutes = result % 60;

  const isVisible = false

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={require('./assets/logo.png')}
        />
        <Text style={styles.titleTextStyle}>LAST WAR Speed-Up Calculator</Text>

        <View style={styles.group}>
          <View style={styles.singleItem}>
            <Text style={styles.textStyle}>8 hour</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder='Amount'
              keyboardType='numeric'
              onChangeText={setEightHours} />
          </View>
          <View style={styles.singleItem}>
            <Text style={styles.textStyle}>1 hour</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder='Amount'
              keyboardType='numeric'
              onChangeText={setOneHours} />
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.singleItem}>
            <Text style={styles.textStyle}>5 minute</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder='Amount'
              keyboardType='numeric'
              onChangeText={setFiveMinutes} />
          </View>
          <View style={styles.singleItem}>
            <Text style={styles.textStyle}>1 minute</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder='Amount'
              keyboardType='numeric'
              onChangeText={setOneMinutes} />
          </View>
        </View>
        {days >= 0 || hours >= 0 || minutes >= 0 ? <Text> {days} day {hours} hour {minutes} minute </Text> : ''}

        <Pressable
          onPress={() => setResult((Number(oneHours) * 60) + ((Number(eightHours) * 8) * 60) + (Number(fiveMinutes) * 5) + Number(oneMinutes))}
          style={({ pressed }) => [{
            backgroundColor: pressed ? "white" : "#ff552f"
          }, styles.buttonStyle]}>
          <Text style={styles.buttonText}>Calculate</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleItem: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '50%',
    height: '20%',
    objectFit: 'contain',
    display: 'flex',
    justifyContent: 'center',
    shadowOffset: 2,
    shadowColor: 'gray'
  },
  titleTextStyle: {
    fontSize: 30,
    width: '80%',
    fontWeight: 'bold',
    color: '#5dcbf4',
    textAlign: 'center',
    marginVertical: 10,
    textShadowColor: 'lightblue',
    textShadowRadius: 10,
  },
  textStyle: {
    marginVertical: 3
  },
  textInputStyle: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center'
  },
  buttonStyle: {
    borderRadius: 10,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff552f',
    marginVertical: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  },
  litteTextStyle: {
    position: 'absolute',
    bottom: 20, // Ekranın altından 20 birim yukarıda olacak
    alignSelf: 'center',
    fontSize: 16,
  }
});