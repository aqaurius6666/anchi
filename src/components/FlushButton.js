import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {flushLocal} from '../redux/actions';

const FlushButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props.flushLocal()}>
      <Text style={styles.buttonText}>FLUSH ALL LOCAL DATA</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 32,
    borderRadius: 8,
    backgroundColor: '#f88',
    paddingHorizontal: 12,
    marginHorizontal: 2,
    marginVertical: 4,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default connect(null, {flushLocal})(FlushButton);
