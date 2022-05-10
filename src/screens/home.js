import { Button } from 'native-base';
import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    useWindowDimensions,
    
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Home({ navigation }) {
    const window = useWindowDimensions();

    return (
        <View style={GlobalStyle.content}>
            
            <Image
                style={{
                    width: window.width,
                    height: window.width,
                }}
                source={require('../../assets/eg/Mini-Apple-Pies.png')}
            />
            <Text style={[GlobalStyle.CustomFont]}> This is the content of Home </Text>
        </View>
    );
}

const styles = StyleSheet.create({
});


export default Home;