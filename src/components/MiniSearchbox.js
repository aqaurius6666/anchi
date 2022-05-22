import React from 'react';

import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Tag from './Tag';

class MiniSearchbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list ?? [],
      showing: [],
      searchText: '',
      ready: false,
      selected: this.props.selected ?? [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.list !== prevProps.list ||
      this.props.selected !== prevProps.selected
    ) {
      this.setState({
        ...prevState,
        list: this.props.list,
        selected: this.props.selected,
      });
    }
  }

  _onChange = text => {
    const normalisedText = text.toLowerCase();
    let newShowing = [];
    if (text !== '') {
      const startswith = this.state.list.filter(item =>
        item.title?.toLowerCase().startsWith(normalisedText),
      );
      const includes = this.state.list.filter(
        item =>
          item.title?.toLowerCase().includes(normalisedText) &&
          !item.title?.toLowerCase().startsWith(normalisedText),
      );
      newShowing = startswith.concat(includes);
    } else {
      newShowing = [];
    }

    const ready = this.state.list.some(
      item => item.title.toLowerCase() === normalisedText,
    );

    this.setState({
      ...this.state,
      showing: newShowing,
      searchText: text,
      ready: ready,
    });
  };

  _onAddSelection = newSelection => {
    this.props.onAddItem(newSelection);
  };

  _onCreateSelection = newSelection => {
    this.props.onCreateItem(newSelection);
  };

  _onChooseToAutofill = text => {
    console.log('choose tag to autofill');
    this.setState({...this.state, searchText: text, ready: true});
  };

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 240}}>
          <TextInput
            style={styles.textField}
            onChangeText={text => {
              this._onChange(text);
            }}
            value={this.state.searchText}
          />
          {this.state.ready ? (
            <TouchableOpacity
              style={[styles.confirmButton, styles.enabledButton]}
              onPress={() => {
                this._onAddSelection(this.state.searchText.toLowerCase());
              }}>
              <Text
                style={[styles.confirmButtonText, styles.enabledButtonText]}>
                Add
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.confirmButton, styles.createNewButton]}
              onPress={() => {
                this._onCreateSelection(this.state.searchText.toLowerCase());
              }}>
              <Text
                style={[styles.confirmButtonText, styles.createNewButtonText]}>
                New
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.tagContainer}>
          {this.state.showing.map(item => (
            <Tag
              title={item.title}
              key={item.id}
              onPress={() => this._onChooseToAutofill(item.title)}
            />
          ))}
        </View>
        <View style={styles.tagContainer}>
          {this.state.selected.map(item => (
            <Tag title={item.title} key={item.id} type="tinted" />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    fontSize: 12,
    width: 180,
    height: 20,
    marginVertical: 4,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  confirmButton: {
    width: 50,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 4,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enabledButton: {
    borderColor: '#D289FF',
  },
  createNewButton: {
    backgroundColor: '#62ffc6',
    borderColor: '#62ffc6',
  },
  confirmButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  enabledButtonText: {
    color: '#D289FF',
  },
  createNewButtonText: {
    color: '#000',
    fontWeight: 'normal',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
  },
});

export default MiniSearchbox;
