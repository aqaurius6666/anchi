import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FoodCard from '../components/FoodCard';

import GlobalStyle from '../styles/GlobalStyle';

function SearchScreen(props) {

  const [data, setData] = React.useState(props.foods.data);

  return (
    <View style={[GlobalStyle.content]}>
      <FlatList
        data={props.foods.data}
        renderItem={item => {
          return <FoodCard food={item.item} navigation={props.navigation} />;
        }}
        keyExtractor={item => item.id}
      />
      <View style={{ height: 36, width: 1 }}></View>
    </View>
  );
}

const mapStateToProps = state => ({
  foods: state.foods,
});

export default connect(mapStateToProps)(SearchScreen);
