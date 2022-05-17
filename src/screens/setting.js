import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState, } from 'react'

export default function setting() {
  const timer = useRef(null);
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter((prevValue) => prevValue + 1);
    timer.current = setTimeout(addOne, 200);
  }

  const stopTimer = () => {
    clearTimeout(timer.current);
  }
  return (
    <View>

      <TouchableOpacity onPressIn={addOne} onPressOut={stopTimer}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>setting</Text>
    </View>
  )
}

const styles = StyleSheet.create({})