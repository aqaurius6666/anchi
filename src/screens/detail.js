import React, { useCallback } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    SafeAreaView,
    Linking
} from 'react-native';
import CustomButton, { CustomButtonOutline } from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
// import { Icons } from '../components/icons';
import LinearGradient from 'react-native-linear-gradient';

const ggMap = 'https://www.google.com/maps/search/';

function FoodDetail({ eg }) {
    return (
        <View style={styles.detailView}>
            <View style={GlobalStyle.DetailSection}>
                <Text style={GlobalStyle.Title}>{eg.title}</Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text style={GlobalStyle.Subtitle}>{eg.tags.join('・')}</Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text
                    style={[GlobalStyle.Desc, styles.desc]}>
                    {'      ' + eg.desc}
                </Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text style={[GlobalStyle.Desc, styles.desc]}>
                    Nguyên liệu ({eg.ingre.length}) :
                    {eg.ingre.map(e => { return '\n- ' + e })}
                </Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text style={[GlobalStyle.Desc, styles.desc, styles.bottomPad]}>
                    Địa chỉ ({eg.address.length}) : {'\n'}
                    {eg.address.map((e, index) => {
                        return (
                            <Text
                                style={styles.link}
                                onPress={() => { if (Linking.canOpenURL(ggMap + e)) Linking.openURL(ggMap + e) }}
                                key={index}
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >- {e + '\n'}</Text>
                        )
                    })}
                </Text>
            </View>
        </View>
    );
};

function StoreDetail({ eg }) {

    return (
        <View style={styles.detailView}>
            <View style={GlobalStyle.DetailSection}>
                <Text style={GlobalStyle.Title}>{eg.title}</Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text style={GlobalStyle.Subtitle}>{eg.tags.join('・')}</Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text
                    style={[GlobalStyle.Desc, styles.desc, styles.link]}
                    onPress={() => { if (Linking.canOpenURL(ggMap + eg.address)) Linking.openURL(ggMap + eg.address) }}
                >
                    Địa chỉ: {eg.address}
                </Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text
                    style={[GlobalStyle.Desc, styles.desc]}>
                    {'      ' + eg.desc}
                </Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text style={[GlobalStyle.Desc, styles.desc]}>
                    Thực đơn ({eg.menu.length}) :
                    {eg.menu.map(e => { return '\n- ' + e })}
                </Text>
            </View>
            <View style={GlobalStyle.DetailSection}>
                <Text style={[GlobalStyle.Desc, styles.desc, styles.bottomPad]}>
                    Lưu ý:{'\n'}
                    {Object.keys(eg.note).map(e => {
                        return (eg.note[e] ? '✅ ' : '❌ ') + (e + '\n');
                    })}
                </Text>
            </View>
        </View>
    );
};

function Detail({ navigation, route }) {
    const window = useWindowDimensions();

    const { detail, food } = route.params;
    const eg = detail;

    return (
        <SafeAreaView style={GlobalStyle.content}>
            <CustomButtonOutline
                icon_name="md-arrow-back-sharp"
                style={styles.typeIcon}
                onPress={() => {
                    navigation.pop();
                }}
                colors={['#D289FF', '#7170D3', '#fff']}
                type='ionicon'
                size={36}
            />

            <View style={styles.bottomTab}>
                <LinearGradient
                    colors={['#ffffff60', '#ffffff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.9 }}
                    style={styles.linearGradient}
                >
                    <CustomButtonOutline
                        icon_name="ios-heart"
                        type="ionicon"
                        colors={['#62F6FF', '#6AF25E', '#fff']}
                        size={36}
                    />
                    <CustomButtonOutline
                        icon_name="md-close"
                        type="ionicon"
                        colors={['#FFA06A', '#F40159', '#fff']}
                        size={36}
                    />
                </LinearGradient>
            </View>

            <ScrollView style={[styles.content]}>
                <Image
                    style={{
                        width: window.width,
                        height: window.width,
                    }}
                    source={eg.image}
                />

                {food ? <FoodDetail eg={eg} /> : <StoreDetail eg={eg} />}

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        display: 'flex',
    },
    typeIcon: {
        position: 'absolute',
        top: 18,
        left: 18,
        zIndex: 1,
        elevation: 10,
    },

    desc: {
        fontSize: 15,
    },

    detailView: {
    },

    bottomPad: {
        paddingBottom: '14%',
    },

    bottomTab: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingTop: '1%',
        paddingBottom: '4%'
    },
    link: {
        textDecorationLine: 'underline',
        color: '#6464af',
    }
});

export default Detail;
