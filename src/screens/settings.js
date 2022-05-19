import {
  StyleSheet,
  SafeAreaView,
  View, Text,
  Dimensions,
  Switch,
} from 'react-native';
import React, { useRef, useState, } from 'react';
import { CustomButtonOutline } from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';

import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';

export const data = [
  {
    value: '1',
    label: 'Tiger Nixon',
    employee_salary: '320800',
    employee_age: '61',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
    disabled: true, // disable the item
  },
  {
    value: '2',
    label: 'Garrett Winters',
    employee_salary: '170750',
    employee_age: '63',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: '3',
    label: 'Ashton Cox',
    employee_salary: '86000',
    employee_age: '66',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: '4',
    label: 'Cedric Kelly',
    employee_salary: '433060',
    employee_age: '22',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
];

export default function Settings({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [isEnabled, setIsEnabled] = useState(false);

  const [valueSS, setValueSS] = useState('');

  const onChangeSS = (value) => {
    setValueSS(value);
  };

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
      <View style={[GlobalStyle.TitleBoxHeader]}>
        <Text style={GlobalStyle.Title}>Cài đặt</Text>
      </View>
      
      {/* <View
        style={{ width: 200, height: 60, }}
      >
        <Dropdown
          label="Simple dropdown"
          data={data}
          enableSearch
          value={valueSS}
          onChange={onChangeSS}
        />
      </View> */}

      <View style={{ width: '90%', paddingTop: '10%' }}>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          <Text style={[GlobalStyle.CustomFont, styles.text]}>Chế độ tối</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => setIsEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
      </View>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  typeIcon: {
    position: 'absolute',
    top: 18,
    left: 18,
    zIndex: 1,
    elevation: 10,
  },
  viewLeft: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 20,
  }
})