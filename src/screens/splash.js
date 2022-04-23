import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Splash({ navigation }) {
    
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('An Chi');
        }, 2000);
    }, []);

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Text style={[GlobalStyle.CustomFont, styles.text]}> AnChi </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b1b1ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 10
    },
    text: {
        fontSize: 52,
        color: '#000',
    },
});

export default Splash;