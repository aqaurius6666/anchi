import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MiniSearchbox from '../components/MiniSearchbox';

import Tag from '../components/Tag';

import GlobalStyle from '../styles/GlobalStyle';

class AddScreen extends React.Component {
  constructor(props) {
    super(props);

    this.ingredients = ['egg', 'flour', 'beef', 'pork', 'bánh mì'];
    this.tags = ['spice', 'diary', 'peanut'];

    this.state = {
      newFood: {
        title: '',
        description: '',
        ingredients: [],
        tags: [],
      },
    };
  }

  _onChangeTitle = text => {
    this.setState({
      ...this.state,
      newFood: {...this.state.newFood, title: text},
    });
  };

  _onChangeDescription = text => {
    this.setState({
      ...this.state,
      newFood: {...this.state.newFood, description: text},
    });
  };

  _onAddIngredient = item => {
    if (!this.state.newFood.ingredients.includes(item)) {
      this.setState({
        ...this.state,
        newFood: {
          ...this.state.newFood,
          ingredients: [...this.state.newFood.ingredients, item],
        },
      });
    } else {
      console.log('The ingredient has already been added');
    }
  };

  _onAddTag = item => {
    if (!this.state.newFood.tags.includes(item)) {
      this.setState({
        ...this.state,
        newFood: {
          ...this.state.newFood,
          tags: [...this.state.newFood.tags, item],
        },
      });
    } else {
      console.log('The tag has already been added');
    }
  };

  _addFood = () => {
    console.log('pressed Add ', this.state.newFood);
    this.setState({
      ...this.state,
      newFood: {title: '', description: '', ingredients: [], tags: []},
    });
  };

  render() {
    return (
      <View style={GlobalStyle.content}>
        <Text style={[GlobalStyle.CustomFont]}>
          {' '}
          This is the content of Add{' '}
        </Text>
        <Text style={GlobalStyle.Title}>New food</Text>
        <View>
          <Text style={styles.inputLabel}>Title:</Text>
          <TextInput
            style={GlobalStyle.textField}
            value={this.state.newFood.title}
            onChangeText={this._onChangeTitle}
          />
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={[
              GlobalStyle.textField,
              {textAlignVertical: 'top', height: 64},
            ]}
            value={this.state.newFood.description}
            onChangeText={this._onChangeDescription}
            multiline={true}
          />
          <Text style={styles.inputLabel}>Ingredients:</Text>
          <MiniSearchbox
            list={this.ingredients}
            selected={this.state.newFood.ingredients}
            onAddItem={this._onAddIngredient}
          />
          <Text style={styles.inputLabel}>Tags:</Text>
          <MiniSearchbox
            list={this.tags}
            selected={this.state.newFood.tags}
            onAddItem={this._onAddTag}
          />
          <TouchableOpacity
            onPress={() => {
              this._addFood();
            }}>
            <LinearGradient
              colors={['#D289FF', '#7170D3']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.normalButton}>
              <Text style={styles.normalButtonText}>Add</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000',
    marginVertical: 4,
  },
  normalButton: {
    height: 32,
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    marginHorizontal: 2,
    marginVertical: 4,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddScreen;
