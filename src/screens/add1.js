import React, {useState} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import MiniSearchbox from '../components/MiniSearchbox';
import GlobalStyle from '../styles/GlobalStyle';

import { addFood, addIngredient } from '../redux/actions';

function add1(props) {
    const [ingredients, setIngredients] = useState(['egg', 'flour', 'beef', 'pork', 'bánh mì']);
    const [tags, setTags] = useState(['spice', 'diary', 'peanut']);
    const [newFood, setNewFood] = useState({
        title: '',
        description: '',
        ingredients: [],
        tags: [],
    })

    function _onChangeTitle(text) {
        setNewFood({ ...newFood, title: text });
    }

    function _onChangeDescription(text) {
        setNewFood({ ...newFood, description: text });
    }

    function _onAddIngredient(item) {
        if (!newFood.ingredients.includes(item)) {
            setNewFood({ ...newFood, item });
        } else {
            console.log('The ingredient has already been added');
        }
    }

    function _onCreateIngredient(item) {
        props.addIngredient(item);
    }

    function _onAddTag(item) {
        if (!newFood.tags.includes(item)) {
            setNewFood({ ...newFood, item });
        } else {
            console.log('The tag has already been added');
        }
    }

    function _addFood() {
        props.addFood(newFood);
        setNewFood({title: '', description: '', ingredients: [], tags: []})
    };

    return (
        <View style={GlobalStyle.content}>
            <Text style={GlobalStyle.Title}>New food</Text>
            <View>
                <Text style={styles.inputLabel}>Title:</Text>
                <TextInput
                    style={GlobalStyle.textField}
                    value={newFood.title}
                    onChangeText={_onChangeTitle}
                />
                <Text style={styles.inputLabel}>Description</Text>
                <TextInput
                    style={[
                        GlobalStyle.textField,
                        { textAlignVertical: 'top', height: 64 },
                    ]}
                    value={newFood.description}
                    onChangeText={_onChangeDescription}
                    multiline={true}
                />
                <Text style={styles.inputLabel}>Ingredients:</Text>
                <MiniSearchbox
                    list={props.ingredients}
                    selected={newFood.ingredients}
                    onAddItem={_onAddIngredient}
                    onCreateItem={_onCreateIngredient}
                />
                <Text style={styles.inputLabel}>Tags:</Text>
                <MiniSearchbox
                    list={tags}
                    selected={newFood.tags}
                    onAddItem={_onAddTag}
                />
                <TouchableOpacity
                    onPress={() => {
                        _addFood();
                    }}>
                    <LinearGradient
                        colors={['#D289FF', '#7170D3']}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.normalButton}>
                        <Text style={styles.normalButtonText}>Add</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    inputLabel: {
        color: '#000',
        marginVertical: 4,
    },
    normalButton: {
        height: 32,
        borderRadius: 8,
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        marginHorizontal: 2,
        marginVertical: 4,
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    normalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

const mapStateToProps = state => ({
    ingredients: state.ingredients,
});

export default connect(mapStateToProps, { addFood, addIngredient })(add1);
