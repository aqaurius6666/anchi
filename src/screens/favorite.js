import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated } from 'react-native';
import CustomButton, { CustomButtonOutline } from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import { Icons } from '../components/icons';
import FavList from '../components/FavList';

const eg1 = [
  {
    id: 1,
    title: 'Bánh táo 1',
    image: require('../../assets/eg/Mini-Apple-Pies.png'),
  }, {
    id: 2,
    title: 'Bánh táo 2',
    image: require('../../assets/eg/Mini-Apple-Pies.png'),
  }, {
    id: 3,
    title: 'Bánh táo 3',
    image: require('../../assets/eg/Mini-Apple-Pies.png'),
  }, {
    id: 4,
    title: 'Bánh táo 4',
    image: require('../../assets/eg/Mini-Apple-Pies.png'),
  }, {
    id: 5,
    title: 'Bánh táo 5',
    image: require('../../assets/eg/Mini-Apple-Pies.png'),
  }
];

const eg2 = [
  {
    id: 1,
    title: 'Nam An Cake 1',
    image: require('../../assets/eg/R.jpg'),
  }, {
    id: 2,
    title: 'Nam An Cake 2',
    image: require('../../assets/eg/R.jpg'),
  },
  {
    id: 3,
    title: 'Nam An Cake 3',
    image: require('../../assets/eg/R.jpg'),
  },
  {
    id: 4,
    title: 'Nam An Cake 4',
    image: require('../../assets/eg/R.jpg'),
  }, {
    id: 5,
    title: 'Nam An Cake 5',
    image: require('../../assets/eg/R.jpg'),
  }, {
    id: 6,
    title: 'Nam An Cake 6',
    image: require('../../assets/eg/R.jpg'),
  }, {
    id: 7,
    title: 'Nam An Cake 7',
    image: require('../../assets/eg/R.jpg'),
  }, {
    id: 8,
    title: 'Nam An Cake 8',
    image: require('../../assets/eg/R.jpg'),
  }, {
    id: 9,
    title: 'Nam An Cake 9',
    image: require('../../assets/eg/R.jpg'),
  }
];


function Favorite({ navigation }) {
  const [food, setFood] = React.useState(true);

  function onPressDetail() {

  }

  function onPressDelete() {

  }

  const renderItem = ({ item }) => (
    <FavList title={item.title} image={item.image} onPressDelete={onPressDelete} onPressDetail={onPressDetail} navigation={navigation} />
  );

  return (
    <View style={GlobalStyle.content}>
      <CustomButton
        icon_name={food ? "hamburger" : "store"}
        style={styles.typeIcon}
        onPress={() => {
          setFood(!food);
        }}
        colors={['#D289FF', '#7170D3', '#fff']}
        type={Icons.FontAwesome5}
      />
      <View style={[GlobalStyle.TitleBox, styles.titleBox]}>
        <Text style={GlobalStyle.Title}>Yêu thích</Text>
      </View>
      <SafeAreaView style={styles.favBox}>
        {food ?
          <Animated.FlatList
            data={eg1}
            renderItem={renderItem}
            keyExtractor={e => e.id}
            nestedScrollEnabled={false}
          />
          :
          <Animated.FlatList
            data={eg2}
            renderItem={renderItem}
            keyExtractor={e => e.id}
            showsVerticalScrollIndicator={true}
            fadingEdgeLength={10}
            initialNumToRender={4}
          />
        }
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    marginTop: '4%',
  },
  favBox: {
    backgroundColor: '#6464af20',
    marginTop: '6%',
    marginBottom: '26%',
    width: '90%',
    flex: 1,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 10,
  },
  typeIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 1,
    elevation: 10,
  },
});

export default Favorite;
