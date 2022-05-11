import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomButton from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';

const eg = {
  id: 1,
  title: 'Bánh táo',
  image: require('../../assets/eg/Mini-Apple-Pies.png'),
  tags: ['Bánh ngọt', 'Tráng miệng', 'Hoa quả'],
  desc: 'Bánh này ngon\nMỗi tội ngọt waaaaaaaaa\nMỗi tội vẫn ngonnnn',
  ingre: ['Trứng', 'Táo', 'Bột mỳ', 'Sữa', 'Đường'],
};

const MainCard = ({toggleDetail}) => {
  const window = useWindowDimensions();

  return (
    <View style={GlobalStyle.content}>
      <CustomButton
        icon_name="hamburger"
        style={styles.typeIcon}
        onPress={toggleDetail}
      />

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
            numberOfLines={2}
            ellipsizeMode={'tail'}
            style={[GlobalStyle.Desc, styles.desc]}>
            {eg.desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Home = props => {
  const [showDetail, setShowDetail] = useState(true);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  // return <MainCard />;

  return showDetail ? (
    <MainCard toggleDetail={toggleDetail} />
  ) : (
    <View>
      <Text>another page</Text>
      <CustomButton
        icon_name="hamburger"
        style={styles.typeIcon}
        onPress={toggleDetail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

  detailView: {
    width: '80%',
  },
});

export default Home;
