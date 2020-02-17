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
import categoryList from '../../json/category';
import {normalize} from 'react-native-elements';

const data = Object.values(categoryList.lecture);
const Category = ({navigation}) => {
  const renderList = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('LectureList', {
          plId: item.id,
          lecture: item.name,
        })
      }>
      <View style={style.banner}>
        <Image source={{uri: `${item.img}`}} style={style.img} />
        <View>
          <Text style={style.bannerTitle}>{item.name}</Text>
          <Text style={style.bannerExplain}>{item.explain}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <SafeAreaView style={style.container}>
        <FlatList
          data={data}
          renderItem={renderList}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          style={{height: '90%'}}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
  },
  banner: {
    flexDirection: 'row',
    padding: 7,
    borderColor: palette.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1,
  },
  bannerTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
  },
  bannerExplain: {
    color: '#a8a8a8',
    fontSize: normalize(12),
  },
  img: {
    width: 55,
    height: 55,
    marginRight: 15,
  },
});

export default Category;
