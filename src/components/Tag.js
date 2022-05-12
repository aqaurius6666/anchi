import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected ?? false,
      title: this.props.title ?? 'null',
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          this.state.selected
            ? styles.selectedContainer
            : styles.unselectedContainer,
        ]}
        onPress={() => {
          this.setState({...this.state, selected: !this.state.selected});
        }}>
        <Text
          style={[
            styles.text,
            this.state.selected ? styles.selectedText : styles.unselectedText,
          ]}>
          {this.state.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    marginHorizontal: 2,
    marginVertical: 4,
  },
  selectedContainer: {
    backgroundColor: '#d289ff',
  },
  unselectedContainer: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 12,
  },
  selectedText: {
    color: '#000',
  },
  unselectedText: {
    color: '#000',
  },
});

export default Tag;
