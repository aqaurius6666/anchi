import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import FoodCard, { SmallFoodCard } from '../components/FoodCard';
import { Searchbar, TextInput } from 'react-native-paper';

import GlobalStyle from '../styles/GlobalStyle';
import CustomButton from '../components/CustomButton';
import colors from '../constants/colors';
import { Icons } from '../components/icons';
import { createFood, createIngredient, createTag } from '../redux/actions';
import { IngredientDialog, TagDialog } from '../components/CustomDialog';

function SearchScreen(props) {
  const [foodData, setFoodData] = React.useState(props.foods.data); // render flatlist
  const [food, setFood] = React.useState(true); // food || restaurant
  const [showTag, setShowTag] = React.useState(false); // tag dialog
  const [showIngredient, setShowIngredient] = React.useState(false); // ingredient dialog

  const [newFood, setNewFood] = React.useState({
    ingredients: [],
    tags: [],
  });

  React.useEffect(() => {
    // console.log(newFood.tags.map(item => item.title))
    // console.log(foodData);
    const fiI = newFood.ingredients.map(item => item.id);
    const fiT = newFood.tags.map(item => item.id);
  }, [newFood])

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

      {showTag && <TagDialog
        open={showTag}
        onCancel={() => setShowTag(false)}
        setNewFood={(item) => setNewFood(item)}
        newFood={newFood}
      />}
      {showIngredient && food && <IngredientDialog
        open={showIngredient}
        onCancel={() => setShowIngredient(false)}
        setNewFood={(item) => setNewFood(item)}
        newFood={newFood}
      />}

      <SafeAreaView style={styles.favBox}>
        <View style={{ width: '100%', }}>
          <TouchableOpacity
            onPress={() => setShowTag(true)}
          >
            <Text style={[GlobalStyle.CustomFont, styles.halfNhalf]} numberOfLines={1}>
              Thẻ tags: {newFood.tags.map(item => item.title).join(', ')}
            </Text>
          </TouchableOpacity>
          {food && <TouchableOpacity
            onPress={() => setShowIngredient(true)}
          >
            <Text style={[GlobalStyle.CustomFont, styles.halfNhalf]}>
              Nguyên liệu: {newFood.ingredients.map(item => item.title).join(', ')}
            </Text>
          </TouchableOpacity>}
        </View>
        <FlatList
          data={foodData}
          // fix VirtualizedList: You have a large list that is slow to update
          initialNumToRender={4}
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
  halfNhalf: {
    width: '100%',
    borderColor: colors.primary,
    borderBottomWidth: 1,
    fontSize: 16,
    marginVertical: '2%',
    paddingVertical: '1%',
  }
});


const mapStateToProps = state => ({
  ingredients: state.ingredients,
  tags: state.tags,
  foods: state.foods,
});

export default connect(mapStateToProps, {})(SearchScreen);
