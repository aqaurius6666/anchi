import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {FoodCard} from '../components/FoodCard';

import GlobalStyle from '../styles/GlobalStyle';

const renderItem = ({item}) => {
  return <FoodCard data={item} />;
};

function SearchScreen(props) {
  return (
    <View style={[GlobalStyle.content]}>
      <FlatList
        data={props.food.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  food: state.food,
});

export default connect(mapStateToProps)(SearchScreen);
