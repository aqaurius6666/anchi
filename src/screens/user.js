import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function User({ navigation }) {

    return (
        <View style={GlobalStyle.content}>
            <Text style={[GlobalStyle.CustomFont]}> This is the content of User </Text>
        </View>
    );
}

export default User;