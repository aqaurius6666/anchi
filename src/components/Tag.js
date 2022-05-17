import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ?? 'null',
      type: this.props.type ?? 'mono',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.title !== prevProps.title) {
      this.setState({...prevState, title: this.props.title});
    }
  }

  _onPress = () => {
    if (this.props.onPress) this.props.onPress();
  };

  gradientColor = () => {
    if (this.state.type == 'tinted') return ['#fff', '#62ffc6'];
    return ['#fff', '#fff'];
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this._onPress();
        }}>
        <LinearGradient
          colors={this.gradientColor()}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.container}>
          <Text style={styles.text}>{this.state.title} </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    marginHorizontal: 2,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
});

export default Tag;
