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
      buttonDisabled: true,
      selected: this.props.selected ?? [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
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
        item.startsWith(normalisedText),
      );
      const includes = this.state.list.filter(
        item =>
          item.includes(normalisedText) && !item.startsWith(normalisedText),
      );
      newShowing = startswith.concat(includes);
    } else {
      newShowing = [];
    }

    const disabled = !this.state.list.includes(normalisedText);

    this.setState({
      ...this.state,
      showing: newShowing,
      searchText: text,
      buttonDisabled: disabled,
    });
  };

  _onAddSelection = newSelection => {
    this.props.onAddItem(newSelection);
    this._onChange('');
    // const newSelectedList = [...this.state.selected, newSelection];
    // this.setState({...this.state, selected: newSelectedList});
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
          <TouchableOpacity
            style={[
              styles.confirmButton,
              this.state.buttonDisabled
                ? styles.disabledButton
                : styles.enabledButton,
            ]}
            disabled={this.state.buttonDisabled}
            onPress={() => {
              this._onAddSelection(this.state.searchText.toLowerCase());
            }}>
            <Text
              style={[
                styles.confirmButtonText,
                this.state.buttonDisabled
                  ? styles.disabledButtonText
                  : styles.enabledButtonText,
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagContainer}>
          {this.state.showing.map(item => {
            return <Tag title={item} />;
          })}
        </View>
        <View style={styles.tagContainer}>
          {this.state.selected.map(item => {
            return <Tag title={item} type="tinted" />;
          })}
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
    borderColor: '#D289FF',
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
  disabledButton: {
    borderWidth: 0,
  },
  confirmButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D289FF',
  },
  enabledButtonText: {
    color: '#D289FF',
  },
  disabledButtonText: {
    display: 'none',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
  },
});

export default MiniSearchbox;
