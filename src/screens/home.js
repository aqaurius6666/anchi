import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import CustomButton, { CustomButtonOutline } from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import { Icons } from '../components/icons';
import { Icon as GIcon } from 'react-native-gradient-icon';

const eg = {
  id: 1,
  title: 'Bánh táo',
  image: require('../../assets/eg/Mini-Apple-Pies.png'),
  tags: ['Bánh ngọt', 'Tráng miệng', 'Hoa quả'],
  desc: 'Apple Pie - bánh Pie nhân táo là một món bánh bảo dễ cũng đúng mà bảo khó cũng không sai. Dễ là bởi vì làm rất nhanh, không có nhiều thao tác, chỉ nhồi, cán bột rồi cho nhân vào, mang đi nướng. Khả năng hỏng (theo nghĩa không ăn được) – là cực thấp. Còn khó là bởi vì tuy không có nhiều khâu, nhưng ở mỗi khâu đều cần cẩn thận và kĩ thuật tốt, lệch đi một tẹo thôi là bánh có thể không đạt yêu cầu rồi.',
  ingre: ['Trứng', 'Táo', 'Bột mỳ', 'Sữa', 'Đường'],
};

const MainCard = (props) => {
  const window = useWindowDimensions();

  return (
    <View style={[GlobalStyle.content, styles.content]}>
      <CustomButton
        icon_name="hamburger"
        style={styles.typeIcon}
        onPress={props.toggleDetail}
        colors={['#D289FF', '#7170D3', '#fff']}
        type={Icons.FontAwesome5}
      />

      <Image
        style={{
          width: window.width,
          height: window.width,
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
            numberOfLines={4}
            ellipsizeMode={'tail'}
            style={[GlobalStyle.Desc, styles.desc]}>
            {eg.desc}
          </Text>
          <Text
            style={[GlobalStyle.CustomFont, styles.seeMore]}
            onPress={() => {
              props.navigation.navigate('Detail')
              console.log('hi')
            }}
          >
            {'>>  '}Xem thêm
          </Text>
        </View>
      </View>

      <View
        style={styles.bottomTab}
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

      </View>

    </View>
  );
};

function Home({ navigation }) {
  const [showDetail, setShowDetail] = useState(true);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    showDetail ?
      (
        <MainCard toggleDetail={toggleDetail} navigation={navigation}/>
      ) : (
        <View>
          <Text>another page</Text>
          <CustomButton
            icon_name="hamburger"
            style={styles.typeIcon}
            colors={['#D289FF', '#7170D3', '#fff']}
            onPress={toggleDetail}
          />
        </View>
      )
  )
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  image: {},

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

  seeMore: {
    color: '#646464',
    textDecorationLine: 'underline',
  },

  detailView: {
    width: '80%',
    height: '26%',
    // marginTop: '1%',
    marginBottom: '10%'
  },

  bottomTab: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%'
  }
});

export default Home;
