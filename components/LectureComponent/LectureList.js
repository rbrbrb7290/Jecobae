import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import getPlayList from '../../service/DataProcessor';
import {normalize} from 'react-native-elements';
import Admob from '../Admob';
import palette from '../../style/palette';

const LectureList = ({navigation}) => {
  const [playList, setPlayList] = useState(null);
  const [pageToken, setPageToken] = useState(null);
  const [prevDisabled, setPrevDisabled] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(1);

  const _getPlayList = async () => {
    setPlayList(await getPlayList(`${navigation.getParam('plId')}`, pageToken));
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    _getPlayList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageToken]);

  const _setBtnState = (prevPageToken, nextPageToken) => {
    !prevPageToken ? setPrevDisabled(0) : setPrevDisabled(1);
    !nextPageToken ? setNextDisabled(0) : setNextDisabled(1);
  };

  const PrevNextButton = () => {
    const {
      pageToken: {nextPageToken, prevPageToken},
    } = playList;
    useEffect(() => {
      _setBtnState(prevPageToken, nextPageToken);
    }, [nextPageToken, prevPageToken]);
    return (
      <View style={style.buttonWrap}>
        <TouchableOpacity
          style={{...style.button, opacity: prevDisabled}}
          onPress={() =>
            !prevPageToken ? {} : setPageToken(`pageToken=${prevPageToken}`)
          }>
          <Text>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...style.button, opacity: nextDisabled}}
          onPress={() =>
            !nextPageToken ? {} : setPageToken(`pageToken=${nextPageToken}`)
          }>
          <Text>다음</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderVideo = ({item: {title, img, desc, date, videoId}}) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('LectureVideo', {
          videoId: videoId,
          title: title,
          desc: desc,
        })
      }
      underlayColor={palette.textColor}>
      <View style={style.container}>
        <View style={style.itemBox}>
          <Image
            source={{uri: `${img}`}}
            style={{width: 'auto', height: 200}}
          />
        </View>
        <View style={style.itemTitleBox}>
          <Text style={style.title}>{title}</Text>
          <Text numberOfLines={1} style={style.date}>
            {date}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHeader = () => (
    <View style={style.header}>
      <Text
        style={{
          fontSize: normalize(16),
          fontWeight: 'bold',
          color: palette.subTextColor,
        }}>
        {navigation.getParam('lecture')} 강좌
      </Text>
    </View>
  );

  return !playList ? (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        flex: 1,
      }}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <SafeAreaView style={{flex: 10}}>
        <FlatList
          data={playList.videoInfo}
          renderItem={renderVideo}
          keyExtractor={item => item.videoId}
          ListHeaderComponent={renderHeader}
          style={{flex: 8}}
        />
      </SafeAreaView>
      <View style={{flex: 1}}>
        <PrevNextButton />
      </View>
      <Admob />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemBox: {
    flex: 2,
    minWidth: '98%',
    backgroundColor: palette.textColor,
    paddingVertical: 3,
    paddingHorizontal: 6,

    marginTop: 10,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  title: {
    color: palette.backgroundColor,
    fontSize: normalize(15),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#8a8a8a',
    fontSize: normalize(12),
  },
  buttonWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
    // justifyContent: 'space-between'
  },
  button: {
    flex: 0.35,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 2,
    borderWidth: 0.8,
    borderColor: '#dedede',
  },
  header: {
    flex: 1,
    marginTop: 5,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  itemTitleBox: {
    paddingTop: 3,
    paddingHorizontal: 15,
  },
});

export default LectureList;
