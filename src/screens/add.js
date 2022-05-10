import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import CButton from '../components/CButton';
import GlobalStyle from '../styles/GlobalStyle';

function Add({ navigation }) {

    return (
        <View style={GlobalStyle.content}>
            <Text style={[GlobalStyle.CustomFont]}> This is the content of Add </Text>
        </View>
    );
}

export default Add;