import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },

  CustomFont: {
    // fontFamily: 'SVNChickenNoodleSoup-Regular',
    fontFamily: 'iCielLudema-Regular',
    fontSize: 18,
    color: '#000',
  },
  CustomFontBold: {
    // fontFamily: 'SVNChickenNoodleSoup-Regular',
    fontFamily: 'iCielLudema-Bold',
    fontSize: 18,
    color: '#000',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },

  CustomFont2: {
    fontFamily: 'LavishlyYours-Regular',
    // fontWeight: '700',
  },

  ButtonText: {
    fontFamily: 'LavishlyYours-Regular',
    fontSize: 30,
    padding: 10,
  },

  TitleBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  TitleBoxHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4%',
  },

  Title: {
    fontFamily: 'iCielLudema-Bold',
    fontSize: 32,
    color: '#000',
    marginTop: 4,
  },

  SubtitleBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Subtitle: {
    fontFamily: 'iCielLudema-Regular',
    fontSize: 16,
    color: '#646464',
    // padding: 4,
  },

  DescBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  Desc: {
    fontFamily: 'iCielLudema-Regular',
    fontSize: 18,
    color: '#000',
    lineHeight: 24,
  },

  DetailSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#8686b7',
    padding: '2%',
  },

  textField: {
    fontSize: 14,
    width: 240,
    height: 28,
    marginVertical: 4,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
