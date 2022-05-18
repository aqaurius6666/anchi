import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import MiniSearchbox from '../components/MiniSearchbox';
import FlushButton from '../components/FlushButton';
import GlobalStyle from '../styles/GlobalStyle';

import {createFood, createIngredient, createTag} from '../redux/actions';

function add(props) {
  const [newFood, setNewFood] = useState({
    title: '',
    description: '',
    ingredients: [],
    tags: [],
  });

  function _onChangeTitle(text) {
    setNewFood({...newFood, title: text});
  }

  function _onChangeDescription(text) {
    setNewFood({...newFood, description: text});
  }

  function _onAddIngredientNewFood(newItem) {
    if (!newFood.ingredients.some(item => item.title === newItem)) {
      const newItemObj = props.ingredients.data.find(
        obj => obj.title === newItem,
      );
      setNewFood({
        ...newFood,
        ingredients: [...newFood.ingredients, newItemObj],
      });
    } else {
      console.log('The ingredient has already been added');
    }
  }

  // TODO: check if item is already existed
  function _onCreateIngredient(item) {
    props.createIngredient(item);
    console.log('create new ingredient');
  }

  function _onAddTagNewFood(newItem) {
    if (!newFood.tags.some(item => item.title === newItem)) {
      const newItemObj = props.tags.data.find(obj => obj.title === newItem);
      setNewFood({
        ...newFood,
        tags: [...newFood.tags, newItemObj],
      });
    } else {
      console.log('The tag has already been added');
    }
  }

  // TODO: check if item is already existed
  function _onCreateTag(item) {
    props.createTag(item);
    console.log('create new tag');
  }

  function _createFood() {
    props.createFood(newFood);
    setNewFood({title: '', description: '', ingredients: [], tags: []});
  }

  return (
    <View style={GlobalStyle.content}>
      <Text style={GlobalStyle.Title}>New food</Text>
      <View>
        <Text style={styles.inputLabel}>Title:</Text>
        <TextInput
          style={GlobalStyle.textField}
          value={newFood.title}
          onChangeText={_onChangeTitle}
        />
        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          style={[
            GlobalStyle.textField,
            {textAlignVertical: 'top', height: 64},
          ]}
          value={newFood.description}
          onChangeText={_onChangeDescription}
          multiline={true}
        />
        <Text style={styles.inputLabel}>Ingredients:</Text>
        <MiniSearchbox
          list={props.ingredients.data}
          selected={newFood.ingredients}
          onAddItem={_onAddIngredientNewFood}
          onCreateItem={_onCreateIngredient}
        />
        <Text style={styles.inputLabel}>Tags:</Text>
        <MiniSearchbox
          list={props.tags.data}
          selected={newFood.tags}
          onAddItem={_onAddTagNewFood}
          onCreateItem={_onCreateTag}
        />
        <TouchableOpacity
          onPress={() => {
            _createFood();
          }}
          style={styles.normalButton}>
          <LinearGradient
            colors={['#D289FF', '#7170D3']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.normalButtonGradient}>
            <Text style={styles.normalButtonText}>Add</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <FlushButton />
    </View>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000',
    marginVertical: 4,
  },
  normalButton: {
    height: 32,
    width: 60,
    marginHorizontal: 2,
    marginVertical: 4,
    marginTop: 32,
  },
  normalButtonGradient: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalButtonText: {
    color: '#fff',
    fontSize: 16,
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
