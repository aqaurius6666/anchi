import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Menu({ navigation }) {

    return (
        <View style={GlobalStyle.content}>
            <Text style={[GlobalStyle.CustomFont]}> This is the content of Menu </Text>
        </View>
    );
}

export default Menu;