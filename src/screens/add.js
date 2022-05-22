import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { CustomButtonText } from '../components/CustomButton';

import MiniSearchbox from '../components/MiniSearchbox';
import FlushButton from '../components/FlushButton';
import GlobalStyle from '../styles/GlobalStyle';
import colors from '../constants/colors';

import { connect } from 'react-redux';
import { createFood, createIngredient, createTag } from '../redux/actions';

function add(props) {
  const [newFood, setNewFood] = useState({
    title: '',
    description: '',
    ingredients: [],
    tags: [],
    address: [],
  });

  function _onChangeTitle(text) {
    setNewFood({ ...newFood, title: text });
  }
  function _onChangeDescription(text) {
    setNewFood({ ...newFood, description: text });
  }
  function _onChangeAddress(text) {
    setNewFood({ ...newFood, address: [...text] });
  }

  function _onAddIngredientNewFood(newItem) {
    if (
      !newFood.ingredients.some(item => item.title.toLowerCase() === newItem)
    ) {
      const newItemObj = props.ingredients.data.find(
        obj => obj.title.toLowerCase() === newItem,
      );
      if (newItemObj) {
        setNewFood({
          ...newFood,
          ingredients: [...newFood.ingredients, newItemObj],
        });
      } else {
        console.log("There's some bug prevent getting the ingredients needed.");
      }
    } else {
      console.log('The ingredient has already been added');
    }
  }

  function _onRemoveIngredient(removeItem) {
    const fruits = newFood.ingredients.filter(
      item => item.title !== removeItem,
    );
    setNewFood({
      ...newFood,
      ingredients: [...fruits],
    });
  }

  function _onRemoveTag(removeItem) {
    const fruits = newFood.tags.filter(item => item.title !== removeItem);
    setNewFood({
      ...newFood,
      tags: [...fruits],
    });
  }

  function _onAddTagNewFood(newItem) {
    if (!newFood.tags.some(item => item.title.toLowerCase() === newItem)) {
      const newItemObj = props.tags.data.find(
        obj => obj.title.toLowerCase() === newItem,
      );
      if (newItemObj) {
        setNewFood({
          ...newFood,
          tags: [...newFood.tags, newItemObj],
        });
      } else {
        console.log("There's some bug prevent getting the tags needed.");
      }
    } else {
      console.log('The tag has already been added');
    }
  }

  function _createFood() {
    const simpleTags = getSimmpleTagList(newFood.tags);
    const simpleIngredients = getSimpleIngredientList(newFood.ingredients);
    props.createFood({
      ...newFood,
      tags: simpleTags,
      ingredients: simpleIngredients,
    });
    setNewFood({ title: '', description: '', ingredients: [], tags: [] });
  }

  const getSimmpleTagList = list => {
    return list.map(item => item.id) ?? [];
  };

  const getSimpleIngredientList = list => {
    return list.map(item => item.id) ?? [];
  };

  return (
    <View
      style={[
        GlobalStyle.content,
        { flex: 1, height: Dimensions.get('window').height },
      ]}>
      <Text style={GlobalStyle.Title}>Thêm</Text>
      <View style={[GlobalStyle.content, { width: '80%', paddingBottom: 64 }]}>
        <ScrollView>
          <TextInput
            style={[GlobalStyle.textInput]}
            label="Tên"
            textAlignVertical="center"
            selectionColor={colors.primary40}
            value={newFood.title}
            onChangeText={_onChangeTitle}
          />
          <TextInput
            style={[GlobalStyle.textInput]}
            label="Miêu tả"
            textAlignVertical="center"
            selectionColor={colors.primary40}
            value={newFood.description}
            onChangeText={_onChangeDescription}
            multiline
          />

          <TextInput
            style={[GlobalStyle.textInput]}
            label="Địa chỉ"
            textAlignVertical="center"
            selectionColor={colors.primary40}
            value={newFood.address}
            onChangeText={_onChangeAddress}
            multiline
          />

          <MiniSearchbox
            title="Nguyên liệu"
            list={props.ingredients.data}
            selected={newFood.ingredients}
            onAddItem={_onAddIngredientNewFood}
            onRemoveItem={_onRemoveIngredient}
            createNew={true}
          />
          <MiniSearchbox
            list={props.tags.data}
            title="Thẻ tag"
            selected={newFood.tags}
            onAddItem={_onAddTagNewFood}
            onRemoveItem={_onRemoveTag}
            createNew={true}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: '2%',
            }}>
            <CustomButtonText
              disabled={
                newFood.title == '' ||
                newFood.description == '' ||
                newFood.ingredients == [] ||
                newFood.tags == []
              }
              content="Thêm"
              colors={[
                colors.home1,
                colors.home2,
                colors.home180,
                colors.home280,
              ]}
              onPress={() => _createFood()}
              padding={8}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000',
    marginVertical: 4,
  },
});

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  tags: state.tags,
});

export default connect(mapStateToProps, {
  createFood,
  createIngredient,
  createTag,
})(add);
