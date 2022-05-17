import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

function Menu({ navigation }) {

    return (
        <View style={[GlobalStyle.content, styles.content]}>
            <View style={styles.profileTab}>
                <View style={styles.centerView}>
                    <Image
                        source={require('../../assets/profile/avatar.jpg')}
                        style={[styles.image]}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={GlobalStyle.CustomFont} numberOfLines={1}>
                        teamchitogemaidinh@gmail.com
                    </Text>
                    <Text style={[GlobalStyle.CustomFont, styles.seeMore]}>Chi tiết</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: '6%'
    },
    profileTab: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: '6%',
    },
    centerView: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#6464af',
    },
    seeMore: {
        color: '#646464',
        textDecorationLine: 'underline',
    },
});

export default Menu;