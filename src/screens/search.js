import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import FoodCard, { SmallFoodCard } from '../components/FoodCard';
import { Searchbar } from 'react-native-paper';

import GlobalStyle from '../styles/GlobalStyle';
import CustomButton from '../components/CustomButton';
import colors from '../constants/colors';
import { Icons } from '../components/icons';

function SearchScreen(props) {
  const [foodData, setFoodData] = React.useState(props.foods.data);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [food, setFood] = React.useState(true);
  

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={[GlobalStyle.content]}>
      <CustomButton
        icon_name={food ? 'hamburger' : 'store'}
        style={styles.typeIcon}
        onPress={() => {
          setFood(!food);
        }}
        colors={[colors.home1, colors.home2, colors.white]}
        type={Icons.FontAwesome5}
      />
      <View style={[GlobalStyle.TitleBoxHeader]}>
        <Text style={GlobalStyle.Title}>Tìm kiếm</Text>
      </View>
      <SafeAreaView style={styles.favBox}>
        <Searchbar
          placeholder="Tên món"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View>
          <Text></Text>
        </View>
        <FlatList
          data={foodData}
          renderItem={item => {
            return <SmallFoodCard food={item.item} navigation={props.navigation} />;
          }}
          keyExtractor={item => item.id}
        />
        <View style={{ height: 64, width: 1 }}></View>
      </SafeAreaView>
    </View>

  );
}


const styles = StyleSheet.create({
  favBox: {
    marginTop: '2%',
    marginBottom: '4%',
    width: '100%',
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
  foods: state.foods,
});

export default connect(mapStateToProps)(SearchScreen);
