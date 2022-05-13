import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import GlobalStyle from '../styles/GlobalStyle';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.foodList);

    return (
      <View style={GlobalStyle.content}>
        <Text style={{color: '#000'}}>SearchScreen's content</Text>
        {this.props.foodList.map(item => (
          <View key={item.title}>
            <Text style={{color: '#000'}}>{item.title}</Text>
            <Text style={{color: '#000'}}>{item.description}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  foodList: state.foodList,
});

export default connect(mapStateToProps)(SearchScreen);
