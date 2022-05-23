import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { CustomButtonText } from '../components/CustomButton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

import MiniSearchbox from '../components/MiniSearchbox';
import FlushButton from '../components/FlushButton';
import GlobalStyle from '../styles/GlobalStyle';
import colors from '../constants/colors';

import { connect } from 'react-redux';
import { createFood, createIngredient, createTag } from '../redux/actions';

function add(props) {
  const initialSate = {
    title: '',
    description: '',
    ingredients: [],
    tags: [],
    address: [],
    image: null,
  };
  const [newFood, setNewFood] = useState(initialSate);

  // React.useEffect(() => {
  //   // const filepath = 'file:///storage/emulated/0/Android/data/com.app/files/1653287022176.jpg'.slice(7);
  //   // RNFS.exists(filepath).then((result) => {
  //   //   console.log("file exists: ", result);
  //   //   if (result) {
  //   //     return RNFS.unlink(filepath)
  //   //       // .then(() => console.log('FILE DELETED'))
  //   //       .catch(err => console.log(err.message)); // `unlink` will throw an error, if the item to unlink does not exist
  //   //   }
  //   // }).catch(err => console.log(err.message));
  // }, [newFood.image])

  function _onChangeTitle(text) {
    setNewFood({ ...newFood, title: text });
  }
  function _onChangeDescription(text) {
    setNewFood({ ...newFood, description: text });
  }
  function _onChangeAddress(text) {
    const add = text.split('\n').filter(e => e != '').map(e => e.replace(/\s+/g, ' ').trim());
    setNewFood({ ...newFood, address: [...add] });
  }
  function _onChangeImage() {
    const options = {};
    launchImageLibrary(options, response => {
      if (response.assets[0].uri) {
        const oldPath = response.assets[0].uri;
        const newPath = RNFS.ExternalDirectoryPath + '/' + Date.now() + '.jpg';
        RNFS.moveFile(oldPath, newPath).then(() => {
          // console.log('Moved from ' + oldPath + ' -- to-- ' + 'file://' + newPath);
          setNewFood({ ...newFood, image: { uri: 'file://' + newPath } });
          if (newFood.image && newFood.image != '') {
            const filepath = newFood.image.uri.slice(7);
            RNFS.exists(filepath).then((result) => {
              console.log("image exists: ", result);
              if (result) {
                return RNFS.unlink(filepath)
                  .catch(err => console.log(err.message)); // `unlink` will throw an error, if the item to unlink does not exist
              }
            }).catch(err => console.log(err.message));
          }
        }).catch(err => console.log(err));
      }
    })
  }

  function _onAddIngredientNewFood(newItem) {
    if (
      !newFood.ingredients.some(item => item.title.toLowerCase() === newItem)
    ) {
      const newItemObj = props.ingredients.data.find(
        obj => obj.title.toLowerCase() === newItem,
      );
      if (newItemObj) {
        setNewFood({
          ...newFood,
          ingredients: [...newFood.ingredients, newItemObj],
        });
      } else {
        console.log("There's some bug prevent getting the ingredients needed.");
      }
    } else {
      console.log('The ingredient has already been added');
    }
  }
  function _onAddTagNewFood(newItem) {
    if (!newFood.tags.some(item => item.title.toLowerCase() === newItem)) {
      const newItemObj = props.tags.data.find(
        obj => obj.title.toLowerCase() === newItem,
      );
      if (newItemObj) {
        setNewFood({
          ...newFood,
          tags: [...newFood.tags, newItemObj],
        });
      } else {
        console.log("There's some bug prevent getting the tags needed.");
      }
    } else {
      console.log('The tag has already been added');
    }
  }

  // TODO: check if item is already existed
  function _onCreateIngredient(item) {
    props.createIngredient(item);
    console.log('create new ingredient');
  }
  function _onCreateTag(item) {
    props.createTag(item);
    console.log('create new tag');
  }

  function _onRemoveIngredient(removeItem) {
    const fruits = newFood.ingredients.filter(
      item => item.title !== removeItem,
    );
    setNewFood({
      ...newFood,
      ingredients: [...fruits],
    });
  }
  function _onRemoveTag(removeItem) {
    const fruits = newFood.tags.filter(item => item.title !== removeItem);
    setNewFood({
      ...newFood,
      tags: [...fruits],
    });
  }

  function _createFood() {
    const simpleTags = getSimmpleTagList(newFood.tags);
    const simpleIngredients = getSimpleIngredientList(newFood.ingredients);
    props.createFood({
      ...newFood,
      tags: simpleTags,
      ingredients: simpleIngredients,
    });
    setNewFood({
      ...initialSate
    });

  }

  const getSimmpleTagList = list => {
    return list.map(item => item.id) ?? [];
  };
  const getSimpleIngredientList = list => {
    return list.map(item => item.id) ?? [];
  };

  return (
    <View
      style={[
        GlobalStyle.content,
        { flex: 1, height: Dimensions.get('window').height },
      ]}>
      <Text style={GlobalStyle.Title}>Thêm</Text>
      <View style={[GlobalStyle.content, { width: '80%', paddingBottom: 64 }]}>
        <ScrollView>
          <TextInput
            style={[GlobalStyle.textInput]}
            label="Tên"
            textAlignVertical="center"
            selectionColor={colors.primary40}
            value={newFood.title}
            onChangeText={_onChangeTitle}
          />

          <TextInput
            style={[GlobalStyle.textInput]}
            label="Miêu tả"
            textAlignVertical="center"
            selectionColor={colors.primary40}
            value={newFood.description}
            onChangeText={_onChangeDescription}
            multiline
          />

          <TextInput
            style={[GlobalStyle.textInput]}
            label="Địa chỉ"
            textAlignVertical="center"
            selectionColor={colors.primary40}
            value={newFood.address.join['\n']}
            onChangeText={_onChangeAddress}
            multiline
          />

          <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '4%' }}>
            <CustomButtonText
              onPress={_onChangeImage}
              colors={[colors.home1, colors.home2]}
              content={'Chọn ảnh'}
              padding={'2%'}
            />
            {
              newFood.image && newFood.image != '' &&
              <Image
                source={newFood.image}
                style={{ width: 200, height: 200, }}
              />
            }
          </View>
          <MiniSearchbox
            title="Nguyên liệu"
            list={props.ingredients.data}
            selected={newFood.ingredients}
            onAddItem={_onAddIngredientNewFood}
            onCreateItem={_onCreateIngredient}
            onRemoveItem={_onRemoveIngredient}
            createNew={true}
          />

          <MiniSearchbox
            list={props.tags.data}
            title="Thẻ tag"
            selected={newFood.tags}
            onAddItem={_onAddTagNewFood}
            onCreateItem={_onCreateTag}
            onRemoveItem={_onRemoveTag}
            createNew={true}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: '2%',
            }}>
            <CustomButtonText
              disabled={
                newFood.title == '' ||
                newFood.description == '' ||
                newFood.ingredients == [] ||
                newFood.tags == [] ||
                newFood.address == []
              }
              content="Thêm"
              colors={[
                colors.home1,
                colors.home2,
                colors.home180,
                colors.home280,
              ]}
              onPress={() => _createFood()}
              padding={8}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000',
    marginVertical: 4,
  },
});

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  tags: state.tags,
});

export default connect(mapStateToProps, {
  createFood,
  createIngredient,
  createTag,
})(add);
