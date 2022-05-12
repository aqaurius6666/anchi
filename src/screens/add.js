import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import Tag from '../components/Tag';

import GlobalStyle from '../styles/GlobalStyle';

class Add extends React.Component {
  render() {
    return (
      <View style={GlobalStyle.content}>
        <Text style={[GlobalStyle.CustomFont]}>
          {' '}
          This is the content of Add{' '}
        </Text>
        <Text style={GlobalStyle.Title}>New food</Text>
        <View>
          <Text style={styles.inputLabel}>Title:</Text>
          <TextInput style={GlobalStyle.textField} />
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={[
              GlobalStyle.textField,
              {textAlignVertical: 'top', height: 64},
            ]}
            multiline={true}
          />
          <Text style={styles.inputLabel}>Ingredients:</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 240}}>
            <Tag selected={true} title={'potato'} />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </View>
          <Text style={styles.inputLabel}>Tags:</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000',
    marginVertical: 4,
  },
});

export default Add;
