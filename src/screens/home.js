import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    useWindowDimensions,

} from 'react-native';
import CButton from '../components/CButton';
import GlobalStyle from '../styles/GlobalStyle';


function Home({ navigation }) {
    const eg = {
        id: 1,
        title: 'Bánh táo',
        image: '../../assets/eg/Mini-Apple-Pies.png',
        tags: ['Bánh ngọt', 'Tráng miệng', 'Hoa quả'],
        desc: 'Bánh này ngon\nMỗi tội ngọt waaaaaaaaa\nMỗi tội vẫn ngonnnn',
        ingre: ['Trứng', 'Táo', 'Bột mỳ', 'Sữa', 'Đường'],
    }
    const window = useWindowDimensions();

    return (
        <View style={GlobalStyle.content}>
            <CButton icon_name='hamburger' style={styles.typeIcon} />

            <Image
                style={{
                    width: window.width,
                    height: window.width - 40,

                }}
                source={require('../../assets/eg/Mini-Apple-Pies.png')}
            />

            <View style={styles.detailView}>
                <View style={GlobalStyle.TitleBox}>
                    <Text style={GlobalStyle.Title}>{eg.title}</Text>
                </View>
                <View style={GlobalStyle.SubtitleBox}>
                    <Text style={GlobalStyle.Subtitle}>
                        {eg.tags.join('・')}
                    </Text>
                </View>
                <View style={GlobalStyle.DescBox}>
                    <Text numberOfLines={2} ellipsizeMode={'tail'} style={[GlobalStyle.Desc, styles.desc]}>
                        {eg.desc}
                    </Text>
                </View>

                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {

    },
    typeIcon: {
        position: 'absolute',
        top: 18,
        left: 18,
        zIndex: 1,
        elevation: 10,
    },
    desc: {
        overflow: 'hidden',
    },

    detailView: {
        width: '80%',
    }
});


export default Home;