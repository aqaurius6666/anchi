import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import Icon, { Icons } from './icons';

export default function FavList(props) {
    return (
        <TouchableOpacity
            onPress={props.onPressDetail}
            style={styles.favList}
        >
            <Image
                style={{
                    width: 50,
                    height: 50,
                    // paddingLeft: 10,
                    borderRadius: 25,
                }}
                source={props.image}
            />
            <Text style={GlobalStyle.Desc}>{props.title}</Text>
            <TouchableOpacity
                onPress={props.onPressDelete}
                hitSlop={10}
            >
                <Icon
                    type={Icons.Feather}
                    name='x-circle'
                    color='#8686b7'
                    size={22}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    favList: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 10,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
    }
})