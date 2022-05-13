import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    SafeAreaView
} from 'react-native';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';

const eg = {
    id: 1,
    title: 'Bánh táo',
    image: require('../../assets/eg/Mini-Apple-Pies.png'),
    tags: ['Bánh ngọt', 'Tráng miệng', 'Hoa quả'],
    desc: 'Apple Pie - bánh Pie nhân táo là một món bánh bảo dễ cũng đúng mà bảo khó cũng không sai. Dễ là bởi vì làm rất nhanh, không có nhiều thao tác, chỉ nhồi, cán bột rồi cho nhân vào, mang đi nướng. Khả năng hỏng (theo nghĩa không ăn được) – là cực thấp. Còn khó là bởi vì tuy không có nhiều khâu, nhưng ở mỗi khâu đều cần cẩn thận và kĩ thuật tốt, lệch đi một tẹo thôi là bánh có thể không đạt yêu cầu rồi.',
    ingre: ['Trứng', 'Táo', 'Bột mỳ', 'Sữa', 'Đường'],
};

const Detail = props => {
    const window = useWindowDimensions();

    return (
        <SafeAreaView>
            <ScrollView style={[styles.content]}>
                <Image
                    style={{
                        width: window.width,
                        height: window.width - 40,
                    }}
                    source={eg.image}
                />

                <View style={styles.detailView}>
                    <View style={GlobalStyle.TitleBox}>
                        <Text style={GlobalStyle.Title}>{eg.title}</Text>
                    </View>
                    <View style={GlobalStyle.SubtitleBox}>
                        <Text style={GlobalStyle.Subtitle}>{eg.tags.join('・')}</Text>
                    </View>
                    <View style={GlobalStyle.DescBox}>
                        <Text
                            style={[GlobalStyle.Desc, styles.desc]}>
                            {eg.desc}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        display: 'flex',
    },

    desc: {
        overflow: 'hidden',
    },

    detailView: {
        width: '80%',
    },
});

export default Detail;
