import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    Animated,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { CustomButtonOutline } from '../components/CustomButton';
import CustomDialog from '../components/CustomDialog';

function Menu({ navigation }) {

    return (
        <View style={GlobalStyle.content}>
            {/* <CustomDialog open={true}/> */}

        </View>
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