import {
    StyleSheet, Text, View,
    TouchableOpacity
}
    from 'react-native'
import React from 'react'
import Icon, { Icons } from './icons'
import colors from '../constants/colors'

export default function DeletableChip(props) {
    return (
        <TouchableOpacity>
            <Text>{props.content}</Text>
            <Icon type={Icons.Feather} name={'x-circle'} color={colors.primary} size={28} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})