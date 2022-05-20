import React from 'react';
import {Text, Image, View, StyleSheet, useWindowDimensions} from 'react-native';
import {connect} from 'react-redux';

import GlobalStyle from '../styles/GlobalStyle';
import {CardImageFallback} from './CardImageFallback';

const RestaurantCard = props => {
  const window = useWindowDimensions();
  const state = {
    title: props.restaurant.title ?? 'untitled',
    tags:
      props.restaurant.tags.map(
        item => props.tags.data.find(tag => tag.id === item)?.title,
      ) ?? [],
    image: props.restaurant.image ?? null,
    address: props.restaurant.address ?? '',
    description: props.restaurant.description ?? 'Mô tả quán.',
    menu: props.restaurant.menu ?? [],
    note: props.restaurant.note ?? [],
  };

  return (
    <View style={styles.detailView}>
      {state.image ? (
        <Image
          style={{
            width: window.width,
            height: window.width,
          }}
          source={state.image}
        />
      ) : (
        <CardImageFallback />
      )}
      <View style={GlobalStyle.TitleBox}>
        <Text style={GlobalStyle.Title}>{state.title}</Text>
      </View>
      <View style={GlobalStyle.SubtitleBox}>
        <Text style={GlobalStyle.Subtitle}>{state.tags.join('・')}</Text>
      </View>
      <View style={GlobalStyle.DescBox}>
        <Text
          numberOfLines={4}
          ellipsizeMode={'tail'}
          style={[GlobalStyle.Desc, styles.desc]}>
          {state.description}
        </Text>
        <Text
          style={[GlobalStyle.CustomFont, styles.seeMore]}
          onPress={() => {
            props.navigation.push('Detail', {
              detail: state,
              type: 'restaurant',
            });
          }}>
          {'>>  '}Xem thêm
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 75, // as 60 for navbar, 15 for spacing
  },

  typeIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 1,
    elevation: 10,
  },

  desc: {
    overflow: 'hidden',
    textAlign: 'center',
  },

  seeMore: {
    color: '#646464',
    textDecorationLine: 'underline',
  },
  bottomTab: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    // bottom: 80,
  },
});

const mapStateToProps = state => ({
  tags: state.tags,
});

export default connect(mapStateToProps, {})(RestaurantCard);
