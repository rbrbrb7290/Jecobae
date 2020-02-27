import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import data from '../tool/data';

const _renderItem = ({item}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.imgcontainer}
        onPress={() => Linking.openURL(item.link)}>
        <Image style={style.bookimg} source={{uri: item.image}} />

        <Text style={style.tail}>이미지를 클릭하면 사이트로 이동합니다</Text>
      </TouchableOpacity>
      <View style={style.decContainer}>
        <Text>책 정보</Text>
        <Text style={style.bookname}>{item.name}</Text>
        <Text style={style.bookdesc}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default function BookList() {
  const [booklist, setbooklist] = useState('');
  const setbook = async () => {
    setbooklist(await data('booklist'));
  };
  const DATA = Object.values(booklist);

  useEffect(() => {
    setbook();
  }, []);
  return (
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({item}) => <_renderItem item={item} />}
      />
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',},
  imgcontainer: {
    flex: 2,
    width:300,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderWidth: 0.3,
    borderColor: '#BCBCBC',
    marginTop: 10,
    marginHorizontal: 10,
  },
  decContainer:{
    flex: 1,
    width:330,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderWidth: 0.3,
    borderColor: '#BCBCBC',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  bookimg: {
    height: 400,
    width: '100%',
    borderColor:'#BCBCBC',
    borderWidth:0.3,
    resizeMode: 'contain',
  },
  bookname: {
    flex: 1,
    textAlign:'center',
    fontSize: 25,
  },
  bookdesc: {
    flex: 2,
    fontSize: 17,
  },
  tail: {
    fontStyle: 'italic',
    color: '#DCDCDC',
  },
});
