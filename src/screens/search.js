import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import FoodCard from '../components/FoodCard';

import GlobalStyle from '../styles/GlobalStyle';

function SearchScreen(props) {
  const [data, setData] = React.useState(props.foods.data);
  console.log('new food: ', props.foods.data[10]);

  return (
    <View style={[GlobalStyle.content, {paddingBottom: 64}]}>
      <FlatList
        data={props.foods.data}
        renderItem={item => {
          return <FoodCard food={item.item} navigation={props.navigation} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  foods: state.foods,
});

export default connect(mapStateToProps)(SearchScreen);
