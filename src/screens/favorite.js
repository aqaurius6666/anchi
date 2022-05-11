import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Favorite({navigation}) {
  return (
    <View style={GlobalStyle.content}>
      <Text style={[GlobalStyle.CustomFont]}>
        {' '}
        This is the content of Favorite{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  redBox: {
    backgroundColor: 'red',
  },
});

export default Favorite;
