import {
  StyleSheet,
  SafeAreaView,
  View, Text,
  Dimensions,
  Switch,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState, } from 'react';
import { CustomButtonOutline } from '../components/CustomButton';
import GlobalStyle from '../styles/GlobalStyle';
import Icon, { Icons } from '../components/icons';
import colors from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ConfirmDialog, FilterOutDialog } from '../components/CustomDialog';
import { connect } from 'react-redux';

import { deleteTag, setTag } from '../redux/actions';

const STATE = {
  darkTheme: false,
  alarm: false,
  time: new Date(),
};

function FilterOut(props) {
  const [newData, setNewData] = useState(props.data);

  return (
    <FilterOutDialog
      open={props.showFilterOut}
      heading='Chêeeee'
      OK='Lưu vô'
      Cancel='Hừm...'
      onOK={() => {
        props.setData[0](newData);
        props.setData[1](newData);
        props.setShowFilterOut(!props.showFilterOut);
      }}
      onCancel={() =>
        props.setShowFilterOut(!props.showFilterOut)
      }
      data={props.data}
      setNewData={setNewData}
    />
  )
}

function Settings(props) {
  const navigation = props.navigation;
  const [darkTheme, setDarkTheme] = useState(STATE.darkTheme);
  const [alarm, setAlarm] = useState(STATE.alarm);

  const [time, setTime] = useState(STATE.time);
  const [filterOutList, setFilterOutList] = useState(props.tags.data);

  const [showAlarm, setShowAlarm] = useState(false);
  const [showFilterOut, setShowFilterOut] = useState(false);
  const [showBlackList, setShowBlackList] = useState(false);


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

      {
        showFilterOut ?
          <FilterOut
            showFilterOut={showFilterOut}
            setShowFilterOut={setShowFilterOut}
            data={filterOutList} setData={[props.setTag, setFilterOutList]}
          />
          : null
      }

      <View style={{ width: '90%', paddingTop: '10%' }}>

        <View style={[styles.list]}>
          <View style={[styles.row]}>
            <Icon type={Icons.Feather} name={'bell'} color={colors.black} size={28} />
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Thông báo</Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: colors.home280, true: colors.home180 }}
              thumbColor={!alarm ? colors.home2 : colors.home1}
              onValueChange={() => {
                setAlarm(!alarm);
              }}
              value={alarm}
            />
            {alarm && (
              <TouchableOpacity onPress={() => { setShowAlarm(true); }}>
                <Text style={GlobalStyle.CustomFont}>
                  {`${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()} : ${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`}
                </Text>
              </TouchableOpacity>
            )}
            {showAlarm && alarm && (
              <DateTimePicker
                value={time}
                mode='time'
                onChange={(event, selectedValue) => {
                  setShowAlarm(false);
                  setTime(selectedValue);
                }}
              />
            )}
          </View>
        </View>

        <View style={styles.list}>
          <View style={styles.row}>
            <Icon type={Icons.Feather} name={'sun'} color={colors.black} size={28} />
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Chế độ tối</Text>
          </View>
          <Switch
            trackColor={{ false: colors.home280, true: colors.home180 }}
            thumbColor={!darkTheme ? colors.home2 : colors.home1}
            onValueChange={() => {
              setDarkTheme(!darkTheme);
            }}
            value={darkTheme}
          />
        </View>

        <View style={styles.list}>
          <View style={styles.row}>
            <Icon type={Icons.Feather} name={'eye-off'} color={colors.black} size={26} />
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Bộ lọc loại trừ</Text>
          </View>
          <TouchableOpacity hitSlop={4} onPress={() => setShowFilterOut(!showFilterOut)}>
            <Icon type={Icons.Feather} name={'arrow-down-circle'} color={colors.primary} size={26} />
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <View style={styles.row}>
            <Icon type={Icons.Feather} name={'trash-2'} color={colors.black} size={28} />
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Danh sách đen</Text>
          </View>
          <TouchableOpacity hitSlop={4}>
            <Icon type={Icons.Feather} name={'arrow-down-circle'} color={colors.primary} size={26} />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '4%',
    borderBottomColor: colors.primary80,
    borderBottomWidth: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  },
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
    paddingLeft: '2%'
  }
})

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  tags: state.tags,
});

export default connect(mapStateToProps, {
  deleteTag,
  setTag,
})(Settings);