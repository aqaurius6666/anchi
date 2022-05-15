import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    Animated,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Menu({ navigation }) {


    return (
        <SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#000',
        height: '80%',
    },
    scrollViewContainer: {
        width: '100%',
    },
    customScrollBar: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 6,
    },
    customScrollBarBackground: {
        backgroundColor: '#232323',
        borderRadius: 3,
        height: '100%',
        width: 6,
    },
});

export default Menu;