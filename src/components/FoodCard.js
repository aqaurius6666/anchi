import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import GlobalStyle from '../styles/GlobalStyle';

function foodCard(props) {
  const state = {
    title: props.data.title ?? 'untitled',
    tags:
      props.data.tags.map(
        item => props.tags.data.find(tag => tag.id === item)?.title,
      ) ?? [],
    ingredients:
      props.data.ingredients.map(
        item =>
          props.ingredients.data.find(ingredient => ingredient.id === item)
            ?.title,
      ) ?? [],
    description: props.data.description ?? 'No description',
    address: props.data.address ?? '',
  };

  return (
    <View style={styles.detailView}>
      <View style={GlobalStyle.TitleBox}>
        <Text style={GlobalStyle.Title}>{state.title}</Text>
      </View>
      <View style={GlobalStyle.SubtitleBox}>
        <Text style={GlobalStyle.Subtitle}>{state.tags.join('・')}</Text>
      </View>
      <View style={GlobalStyle.SubtitleBox}>
        <Text style={GlobalStyle.Subtitle}>{state.ingredients.join('・')}</Text>
      </View>
      <View style={[GlobalStyle.DescBox, {width: '90%'}]}>
        <Text
          numberOfLines={4}
          ellipsizeMode={'tail'}
          style={[GlobalStyle.Desc, styles.desc]}>
          {state.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailView: {
    alignItems: 'center',
    height: '26%',
    marginBottom: '10%',
    flex: 1,
  },
  desc: {
    overflow: 'hidden',
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  tags: state.tags,
});

export const FoodCard = connect(mapStateToProps, {})(foodCard);
