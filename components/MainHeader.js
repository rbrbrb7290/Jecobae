import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {normalize} from 'react-native-elements';
import palette from '../style/palette';

const MainHeader = ({navigation}) => {
  return (
    <View style={style.headerBox}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./../images/logo.png')}
          style={style.headerLogo}
        />
      </TouchableOpacity>
      <View style={{...style.headerBox, alignItems: 'center'}}>
        {/* <TouchableOpacity style={{marginHorizontal: 18}}>
          <Text style={style.headerMenu}> </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('CheatSheet')}>
          <Text style={style.headerMenu}>치트시트</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginHorizontal: 20}}
          onPress={() => navigation.navigate('License')}>
          <Text style={style.headerMenu}>라이선스</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    backgroundColor: palette.textColor,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
  },
  headerLogo: {
    width: 70,
    height: 50,
    // marginLeft: 5,
    marginRight: 15,
  },
  headerMenu: {
    fontSize: normalize(13),
    fontWeight: 'bold',
    color: palette.mainColor,
  },
});

export default MainHeader;
