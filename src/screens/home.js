import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { NativeBaseProvider, Box } from "native-base";

function Home({ navigation }) {

    return (
        <View style={GlobalStyle.content}>
            <Text style={[GlobalStyle.CustomFont]}> This is the content of Home </Text>
            <NativeBaseProvider>
                <Box>Hello World</Box>
            </NativeBaseProvider>
        </View>
    );
}

export default Home;