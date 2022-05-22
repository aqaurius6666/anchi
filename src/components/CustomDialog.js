import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import { Chip } from "react-native-paper";
import colors from "../constants/colors";
import GlobalStyle from "../styles/GlobalStyle";
import { CustomButtonText } from "./CustomButton";

export function FilterOutDialog(props) {
    const [data, setData] = useState([...props.data]);

    React.useEffect(() => {
        props.setNewData(data);
    }, [data])

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.open}
                onRequestClose={() => {
                    props.onCancel();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modal, { height: '50%', }]}>
                        <Text style={[GlobalStyle.Title]}>
                            {props.heading}
                        </Text>
                        <ScrollView>
                            {data.map((e) => {
                                return (
                                    <Chip
                                        key={e.id}
                                        mode='outlined'
                                        style={styles.chip}
                                        textStyle={GlobalStyle.CustomFont}
                                        onClose={() => {
                                            const fruits = data.filter((x) => x.id !== e.id);
                                            setData(fruits);
                                        }}
                                    >{e.title}</Chip>
                                )
                            })}
                        </ScrollView>
                        <View style={styles.bottomTab}>

                            <CustomButtonText
                                onPress={() => props.onCancel()}
                                content={props.Cancel}
                                colors={[colors.dislike1, colors.dislike2]}
                                padding={4}
                            />
                            <CustomButtonText
                                onPress={() => props.onOK()}
                                content={props.OK}
                                colors={[colors.like1, colors.like2]}
                                padding={4}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const CustomDialog = (props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.open}
                onRequestClose={() => {
                    props.onCancel();
                }}
            >
                <View style={styles.centeredView}
                >
                    <View style={styles.modal}>
                        <Text style={[GlobalStyle.Title]}>
                            {props.heading}
                        </Text>
                        <Text style={[GlobalStyle.CustomFont, styles.content]}>
                            {props.content}
                        </Text>
                        <View style={styles.bottomTab}>

                            <CustomButtonText
                                onPress={() => props.onCancel()}
                                content={props.Cancel}
                                colors={[colors.dislike1, colors.dislike2]}
                                padding={4}
                            />
                            <CustomButtonText
                                onPress={() => props.onOK()}
                                content={props.OK}
                                colors={[colors.like1, colors.like2]}
                                padding={4}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export function LikeDialog(props) {
    return (
        <CustomDialog
            open={props.open}
            onCancel={props.onCancel}
            onOK={props.onOK}
            heading={'CHÚC MỪNG'}
            content={props.content}
            Cancel={'Hừm...'}
            OK={'Géc gô !!'}
        />
    );
}

export function DislikeDialog(props) {
    return (
        <CustomDialog
            open={props.open}
            onCancel={props.onCancel}
            onOK={props.onOK}
            heading={'CHÚ Ý'}
            content={props.content}
            Cancel={'Hừm...'}
            OK={'Được !!'}
        />
    );
}

export function ConfirmDialog(props) {
    return (
        <CustomDialog
            open={props.open}
            onCancel={props.onCancel}
            onOK={props.onOK}
            heading={props.heading}
            content={props.content}
            Cancel={'Hừm...'}
            OK={'Lưu vô !'}
        />
    );
}

const styles = StyleSheet.create({
    centeredView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#6464af80',
        zIndex: 3,
        position: 'absolute',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        padding: 10,
        borderColor: '#6464af',
        borderRadius: 30,
        borderWidth: 1,
        width: '70%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomTab: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    chip: {
        overflow: 'visible',
        marginVertical: 4,
    }
});

export default CustomDialog;