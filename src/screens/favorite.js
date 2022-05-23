import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';

import CustomButton, {CustomButtonOutline} from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import {Icons} from '../components/icons';
import FavoriteItem from '../components/FavoriteItem';

function Favorite(props) {
  const [type, setType] = useState('food');
  const [favoriteFood, setFavoriteFood] = useState(
    props.foods.data.filter(item => props.favorite.food.includes(item.id)),
  );
  const [favoriteRestaurant, setFavoriteRestaurant] = useState(
    props.foods.data.filter(item =>
      props.favorite.restaurant.includes(item.id),
    ),
  );

  useEffect(() => {
    setFavoriteFood(state =>
      props.foods.data.filter(item => props.favorite.food.includes(item.id)),
    );
  }, [props.favorite.food]);

  useEffect(() => {
    setFavoriteRestaurant(state =>
      props.restaurants.data.filter(item =>
        props.favorite.restaurant.includes(item.id),
      ),
    );
  }, [props.favorite.restaurant]);

  return (
    <View style={GlobalStyle.content}>
      <CustomButton
        icon_name={type === 'food' ? 'hamburger' : 'store'}
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
      <View style={[GlobalStyle.TitleBoxHeader]}>
        <Text style={GlobalStyle.Title}>Yêu thích</Text>
      </View>
      <SafeAreaView style={styles.favBox}>
        {type === 'food' ? (
          <FlatList
            data={favoriteFood}
            renderItem={item => {
              return (
                <FavoriteItem
                  data={item.item}
                  navigation={props.navigation}
                  type={'food'}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        ) : (
          <FlatList
            data={favoriteRestaurant}
            renderItem={item => {
              return (
                <FavoriteItem
                  data={item.item}
                  navigation={props.navigation}
                  type={'restaurant'}
                />
              );
            }}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  favBox: {
    marginTop: '6%',
    marginBottom: '26%',
    width: '96%',
    flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 10,
  },
  typeIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 1,
    elevation: 10,
  },
});

const mapStateToProps = state => ({
  favorite: state.favorite,
  foods: state.foods,
  restaurants: state.restaurants,
});

export default connect(mapStateToProps, {})(Favorite);
