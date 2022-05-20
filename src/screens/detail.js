import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomButton, {CustomButtonOutline} from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import {CardImageFallback} from '../components/CardImageFallback';
// import { Icons } from '../components/icons';

const ggMap = 'https://www.google.com/maps/search/';

function FoodDetail(props) {
  const window = useWindowDimensions();
  return (
    <View style={styles.detailView}>
      {props.food.image ? (
        <Image
          style={{
            width: window.width,
            height: window.width,
          }}
          source={props.food.image}
        />
      ) : (
        <CardImageFallback />
      )}
      <View style={GlobalStyle.DetailSection}>
        <Text style={GlobalStyle.Title}>{props.food.title}</Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={GlobalStyle.Subtitle}>{props.food.tags.join('・')}</Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={[GlobalStyle.Desc, styles.desc]}>
          {'\t' + props.food.description}
        </Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={[GlobalStyle.Desc, styles.desc]}>
          Nguyên liệu ({props.food.ingredients.length}) :
          {props.food.ingredients.map(e => {
            return '\n- ' + e;
          })}
        </Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={[GlobalStyle.Desc, styles.desc, styles.bottomPad]}>
          Địa chỉ ({props.food.address.length}) : {'\n'}
          {props.food.address.map((e, index) => {
            return (
              <Text
                style={styles.link}
                onPress={() => {
                  if (Linking.canOpenURL(ggMap + e)) Linking.openURL(ggMap + e);
                }}
                key={index}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                - {e + '\n'}
              </Text>
            );
          })}
        </Text>
      </View>
    </View>
  );
}

function RestaurantDetail(props) {
  const window = useWindowDimensions();
  return (
    <View style={styles.detailView}>
      {props.restaurant.image ? (
        <Image
          style={{
            width: window.width,
            height: window.width,
          }}
          source={props.restaurant.image}
        />
      ) : (
        <CardImageFallback />
      )}
      <View style={GlobalStyle.DetailSection}>
        <Text style={GlobalStyle.Title}>{props.restaurant.title}</Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={GlobalStyle.Subtitle}>
          {props.restaurant.tags.join('・')}
        </Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text
          style={[GlobalStyle.Desc, styles.desc, styles.link]}
          onPress={() => {
            if (Linking.canOpenURL(ggMap + props.restaurant.address))
              Linking.openURL(ggMap + props.restaurant.address);
          }}>
          Địa chỉ: {props.restaurant.address}
        </Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={[GlobalStyle.Desc, styles.desc]}>
          {'      ' + props.restaurant.description}
        </Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={[GlobalStyle.Desc, styles.desc]}>
          Thực đơn ({props.restaurant.menu.length}) :
          {props.restaurant.menu.map(e => {
            return '\n- ' + e;
          })}
        </Text>
      </View>
      <View style={GlobalStyle.DetailSection}>
        <Text style={[GlobalStyle.Desc, styles.desc, styles.bottomPad]}>
          Lưu ý:{'\n'}
          {Object.keys(props.restaurant.note).map(e => {
            return (props.restaurant.note[e] ? '✅ ' : '❌ ') + (e + '\n');
          })}
        </Text>
      </View>
    </View>
  );
}

function Detail({navigation, route}) {
  const {detail, type} = route.params;

  return (
    <SafeAreaView style={GlobalStyle.content}>
      <CustomButtonOutline
        icon_name="md-arrow-back-sharp"
        style={styles.typeIcon}
        onPress={() => {
          navigation.pop();
        }}
        colors={['#D289FF', '#7170D3', '#fff']}
        type="ionicon"
        size={36}
      />

      <View style={styles.bottomTab}>
        <LinearGradient
          colors={['#ffffff60', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.5}}
          style={styles.linearGradient}>
          <CustomButtonOutline
            icon_name="ios-heart"
            type="ionicon"
            colors={['#62F6FF', '#6AF25E', '#fff']}
            size={36}
          />
          <CustomButtonOutline
            icon_name="md-close"
            type="ionicon"
            colors={['#FFA06A', '#F40159', '#fff']}
            size={36}
          />
        </LinearGradient>
      </View>

      <ScrollView style={[styles.content]}>
        {type === 'food' ? (
          <FoodDetail food={detail} />
        ) : (
          <RestaurantDetail restaurant={detail} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
  },
  typeIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 1,
    elevation: 10,
  },

  desc: {
    fontSize: 15,
  },

  detailView: {},

  bottomPad: {
    paddingBottom: '14%',
  },

  bottomTab: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: '1%',
    paddingBottom: '4%',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#6464af',
  },
});

export default Detail;
