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
            <View
                style={styles.rightView}
            >
                <Image
                    style={styles.image}
                    source={props.image}
                />
                <Text style={[GlobalStyle.Desc, styles.text]} numberOfLines={1} >    {props.title}</Text>
            </View>
            <TouchableOpacity
                onPress={props.onPressDelete}
                hitSlop={10}
                style={styles.delete}
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
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 4,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
    },
    rightView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 5,
        paddingLeft: '5%',
    },
    text: {
        width: '70%'
    },
    delete: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    }
})