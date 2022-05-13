import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GlobalStyle from '../styles/GlobalStyle';
import Icon from './icons';
import { Icon as GIcon } from 'react-native-gradient-icon';

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={[styles.touch, props.style]}
      onPress={props.onPress}>
      <LinearGradient
        colors={[props.colors[0], props.colors[1]]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}>
        <Icon
          type={props.type}
          name={props.icon_name}
          color="#fff"
          size={props.size ? props.size : 26}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}

export function CustomButtonOutline(props) {
  return (
    <TouchableOpacity
      style={[styles.touch, props.style]}
      onPress={props.onPress}>
      <LinearGradient
        colors={[props.colors[0], props.colors[1]]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.linearGradient}
      >
        <View
          backgroundColor={props.colors[2]}
          style={styles.linearGradientOutline}
        >
          <GIcon
            size={props.size ? props.size : 26}
            style={{}}
            colors={[
              { color: props.colors[0], offset: "0", opacity: "1" },
              { color: props.colors[1], offset: "1", opacity: "1" },
            ]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            name={props.icon_name} type={props.type}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}


var styles = StyleSheet.create({
  touch: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  linearGradient: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradientOutline: {
    height: 58,
    width: 58,
    borderRadius: 29,
    padding: 11,
    // paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});
