import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Search({ navigation }) {

    return (
        <View style={GlobalStyle.content}>
            <Text style={[GlobalStyle.CustomFont]}> This is the content of Search</Text>
        </View>
    );
}

export default Search;