import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import CustomButton, {CustomButtonOutline} from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import {Icons} from '../components/icons';
import CustomDialog, {
  DislikeDialog,
  LikeDialog,
} from '../components/CustomDialog';
import FoodCard from '../components/FoodCard';
import RestaurantCard from '../components/RestaurantCard';

const randomGen = number => Math.random() * number;

function Home(props) {
  const [seed1] = useState(
    // 4,
    Number(randomGen(props.foods.data.length)),
  );
  const [seed2] = useState(Number(randomGen(props.restaurants.data.length)));
  const [currentFood] = useState(props.foods.data[Math.round(seed1)]);
  const [currentRestaurant] = useState(
    props.restaurants.data[Math.round(seed2)],
  );
  const [type, setType] = useState('food');
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  return (
    <View style={[GlobalStyle.content, styles.content]}>
      <CustomButton
        icon_name={type ? 'hamburger' : 'store'}
        style={styles.typeIcon}
        onPress={() => {
          if (type === 'food') {
            setType('restaurant');
          } else {
            setType('food');
          }
        }}
        colors={['#D289FF', '#7170D3', '#fff']}
        type={Icons.FontAwesome5}
      />

      {type === 'food' ? (
        <FoodCard navigation={props.navigation} food={currentFood} />
      ) : (
        <RestaurantCard
          navigation={props.navigation}
          restaurant={currentRestaurant}
        />
      )}

      <View style={styles.bottomTab}>
        <CustomButtonOutline
          icon_name="md-close"
          type="ionicon"
          colors={['#FFA06A', '#F40159', '#fff']}
          size={36}
          onLongPress={() => setDislike(true)}
          onOK={() => setDislike(false)}
        />
        <CustomButtonOutline
          icon_name="ios-heart"
          type="ionicon"
          colors={['#62F6FF', '#6AF25E', '#fff']}
          size={36}
          onLongPress={() => setLike(true)}
          onOK={() => setLike(false)}
        />
      </View>
      {like ? (
        <LikeDialog
          open={like}
          onCancel={() => {
            setLike(false);
          }}
          onOK={() => {
            setLike(false);
          }}
          content={
            type === 'food'
              ? 'Zô, vậy là bạn thích ' +
                currentFood.title +
                '. Chần chừ chi mà hông đi ăn thôi nào!'
              : 'Zô, vậy là bạn thích ' +
                currentRestaurant.title +
                '. Chần chừ chi mà hông đi ăn thôi nào!'
          }
        />
      ) : null}

      {dislike ? (
        <DislikeDialog
          open={dislike}
          onCancel={() => {
            setDislike(false);
          }}
          onOK={() => {
            setDislike(false);
          }}
          content={
            type === 'food'
              ? 'Zô, vậy là bạn hông thích ' +
                currentFood.title +
                '. Vậy để mình thêm vào hố đen nhá!'
              : 'Zô, vậy là bạn hông thích ' +
                currentRestaurant.title +
                '. Vậy để mình thêm vào hố đen nhá!'
          }
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 75, // as 60 for navbar, 15 for spacing
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
    textAlign: 'center',
  },

  seeMore: {
    color: '#646464',
    textDecorationLine: 'underline',
  },

  detailView: {
    width: '100%',
    height: '50%',
    // marginTop: '1%',
    marginBottom: '10%',
  },
  bottomTab: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    // bottom: 80,
  },
});

const mapStateToProps = state => ({
  foods: state.foods,
  restaurants: state.restaurants,
  ingredients: state.ingredients,
  tags: state.tags,
});

export default connect(mapStateToProps, {})(Home);
