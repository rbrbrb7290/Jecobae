import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import palette from '../../style/palette';
import category from '../../json/category';
import {normalize} from 'react-native-elements';

const categoryList = Object.values(category.lecture);

const Category = ({navigation}) => {
  const renderList = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('LectureList', {
          plId: item.id,
          lecture: item.name,
        })
      }>
      <View style={style.banner}>
        <View style={style.imgBox}>
          <Image source={{uri: `${item.img}`}} style={style.img} />
        </View>
        <View>
          <Text style={style.bannerTitle}>{item.name}</Text>
          <Text style={style.bannerExplain}>{item.explain}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <SafeAreaView style={style.container}>
        <Text style={style.title}>카테고리</Text>
        <FlatList
          data={categoryList}
          renderItem={renderList}
          keyExtractor={item => item.name}
          showsHorizontalScrollIndicator={false}
          style={{height: '90%'}}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  banner: {
    flexDirection: 'row',
    padding: 7,
    backgroundColor: palette.mainColor,
    borderColor: palette.mainColor,
    borderWidth: 0.4,
    borderRadius: 15,
    marginVertical: 5,
  },
  imgBox: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderColor: palette.mainColor,
    borderRadius: 50,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: palette.textColor,
  },
  bannerExplain: {
    color: palette.textColor,
    fontSize: normalize(10),
  },
  img: {
    width: 45,
    height: 45,
  },
});

export default Category;
