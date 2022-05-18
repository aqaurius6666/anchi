import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import Icon, { Icons } from '../components/icons';
import GlobalStyle from '../styles/GlobalStyle';

function Menu({ navigation }) {

    return (
        <View style={[GlobalStyle.content, styles.content]}>
            <View style={styles.profileTab}>
                <Image
                    source={require('../../assets/profile/avatar.jpg')}
                    style={[styles.image]}
                />
                <CustomTextInput
                    editable={false}
                    content={'chitoge'}
                    style={[GlobalStyle.CustomFontBold, styles.username]}
                />
                <CustomTextInput
                    editable={false}
                    content={'chitogemaidinh@gmail.com'}
                    autoComplete={'email'}
                />
                <CustomTextInput
                    editable={false}
                    content={'password'}
                    autoComplete={'password'}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={[styles.bottomNavDiv]}>
                    <Icon
                        type={Icons.Feather}
                        name={'settings'}
                        color={'#6464af80'}
                        size={32}
                    />
                    <Text style={[GlobalStyle.CustomFont, styles.text]}>    Cài đặt </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottomNavDiv]}>
                    <Icon
                        type={Icons.Feather}
                        name={'log-out'}
                        color={'#6464af80'}
                        size={32}
                    />
                    <Text style={[GlobalStyle.CustomFont, styles.text]}>    Đăng xuất </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: '6%',
        flex: 1,
        // backgroundColor: '#123abc'
    },
    profileTab: {
        alignItems: 'center',
        width: '90%',
        flex: 3,
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 4,
        borderColor: '#6464af',
    },
    seeMore: {
        color: '#646464',
        textDecorationLine: 'underline',
    },
    username: {
        width: '60%',
        borderBottomWidth: 0,
        textAlign: 'center',
        fontSize: 24,
        color: '#6464af',
        paddingBottom: 0,
    },
    text: {
        fontSize: 20,
        color: '#000'
    },
    bottomNav: {
        bottom: 10,
        // backgroundColor: '#aaa',
        flex: 1,
        width: '100%'
    },
    bottomNavDiv: {
        flexDirection: 'row',
        borderColor: '#6464af',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#6464af10'
    }
});

export default Menu;