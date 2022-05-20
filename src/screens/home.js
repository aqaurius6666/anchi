import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import CustomButton, { CustomButtonOutline } from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import { Icons } from '../components/icons';
import CustomDialog, { DislikeDialog, LikeDialog } from '../components/CustomDialog';
import { connect } from 'react-redux';
import colors from '../constants/colors';

const eg1 = {
  id: 1,
  title: 'Bánh táo',
  image: require('../../assets/eg/Mini-Apple-Pies.png'),
  tags: ['Bánh ngọt', 'Tráng miệng', 'Hoa quả'],
  desc: 'Apple Pie - bánh Pie nhân táo là một món bánh bảo dễ cũng đúng mà bảo khó cũng không sai. Dễ là bởi vì làm rất nhanh, không có nhiều thao tác, chỉ nhồi, cán bột rồi cho nhân vào, mang đi nướng. Khả năng hỏng (theo nghĩa không ăn được) – là cực thấp. Còn khó là bởi vì tuy không có nhiều khâu, nhưng ở mỗi khâu đều cần cẩn thận và kĩ thuật tốt, lệch đi một tẹo thôi là bánh có thể không đạt yêu cầu rồi.',
  ingre: ['Trứng', 'Táo', 'Bột mỳ', 'Sữa', 'Đường'],
  address: ['Indochina Plaza Hà Nội, 241 Xuân Thủy, Dịch Vọng, Cầu Giấy, Hà Nội',
    'Số 78 Láng Hạ, Đống Đa, Hà Nội',
    '1A Hai Bà Trưng, Hoàn Kiếm, Hà Nội',
  ],
};

const eg2 = {
  id: 1,
  title: 'Nam An Cake',
  image: require('../../assets/eg/R.jpg'),
  tags: ['Bánh ngọt', 'Hoa quả'],
  desc: 'Với Nam An Cake, chúng tôi mang đến nguồn thực phẩm tốt, sạch, phong phú và nhiều dinh dưỡng, thân thiện với môi trường nhằm chia sẻ những lo lắng của khách hàng khi chọn mua thực phẩm hàng ngày cho gia đình. Vì vậy, Nam An Market là nơi mua sắm tin cậy, thân thiện để quý khách khám phá, trải nghiệm sự đa dạng của văn hóa ẩm thực và nghệ thuật thưởng thức.',
  address: '21 Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức',
  menu: ['Bánh táo', 'Bánh chuối', 'Bánh xoài', 'Bánh dâu', 'Bánh việt quất'],
  note: {
    'Thú cưng': true,
    'Ăn tại quán': false,
    'Hút thuốc': false,
  }
}

const FoodCard = (props) => {
  const eg = props.eg;

  return (
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
            props.navigation.push('Detail', { detail: eg, food: true });
          }}
        >
          {'>>  '}Xem thêm
        </Text>
      </View>
    </View>
  );
};

const StoreCard = (props) => {
  const eg = props.eg;

  return (
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
            props.navigation.push('Detail', { detail: eg, food: false });
          }}
        >
          {'>>  '}Xem thêm
        </Text>
      </View>
    </View>
  );
};

function Home(props) {
  const navigation = props.navigation;

  const window = useWindowDimensions();
  const [food, setFood] = useState(true);
  const [eg, setEg] = useState(props.foods.data[0]);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  return (
    <View style={[GlobalStyle.content, styles.content]}>
      <CustomButton
        icon_name={food ? "hamburger" : "store"}
        style={styles.typeIcon}
        onPress={() => {
          food ? setEg(props.restaurants.data[0]) : setEg(props.foods.data[0]);
          setFood(!food);
        }}
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

      {food ? <FoodCard navigation={navigation} eg={eg} /> : <StoreCard navigation={navigation} eg={eg} />}


      <View style={styles.bottomTab}>
        <CustomButtonOutline
          icon_name="md-close"
          type="ionicon"
          colors={[colors.dislike2, colors.dislike1, colors.white]}
          size={36}
          onLongPress={() => setDislike(true)}
          onOK={() => setDislike(false)}
        />
        <CustomButtonOutline
          icon_name="ios-heart"
          type="ionicon"
          colors={[colors.like1, colors.like2, colors.white]}
          size={36}
          onLongPress={() => setLike(true)}
          onOK={() => setLike(false)}
        />
      </View>
      {
        like ?
          <LikeDialog
            open={like}
            onCancel={() => { setLike(false) }}
            onOK={() => { setLike(false) }}
            content={'Zô, vậy là bạn thích ' + eg.title + '. Chần chừ chi mà hông đi ăn thôi nào!'}
          />
          : null
      }

      {
        dislike ?
          <DislikeDialog
            open={dislike}
            onCancel={() => { setDislike(false) }}
            onOK={() => { setDislike(false) }}
            content={'Zô, vậy là bạn hông thích ' + eg.tags[0] + '. Vậy để mình thêm vào hố đen nhá!'}
          />
          : null
      }
    </View>
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
    textAlign: 'center',
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
    width: '100%',
    // bottom: 80,
  }
});

// export default Home;

const mapStateToProps = state => ({
  foods: state.foods,
  restaurants: state.restaurants,
  ingredients: state.ingredients,
  tags: state.tags,
});

export default connect(mapStateToProps, {})(Home);