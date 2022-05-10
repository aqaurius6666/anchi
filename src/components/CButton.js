import React from 'react';
import {
    View,
    Pressable,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GlobalStyle from '../styles/GlobalStyle';
import Icon, { Icons } from './icons';

export default function CButton(props) {
    return (
        <TouchableOpacity style={[styles.touch, props.style]}>
            <LinearGradient colors={['#D289FF', '#7170D3']}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                style={styles.linearGradient}
            >
                <Icon type={Icons.FontAwesome5} name={props.icon_name} color='#fff' size={26} />
            </LinearGradient>
        </TouchableOpacity>
    );
}

var styles = StyleSheet.create({
    touch: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    linearGradient: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
    },
});