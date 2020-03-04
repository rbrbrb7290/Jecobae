import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {normalize} from 'react-native-elements';
import palette from '../../style/palette';
import getPlayList from '../../service/DataProcessor';
import * as env from '../../env';

const HomeVideoComponent = ({
  navigation,
  playListId,
  bannerTitle,
  bannerDesc,
}) => {
  const [playList, setPlayList] = useState(null);
  const [pageToken, setPageToken] = useState(null);
  const [plId] = useState(playListId);

  const _getPlayList = async () => {
    setPlayList(await getPlayList(plId, pageToken));
  };
  useEffect(() => {
    _getPlayList();
    setTimeout(() => {
      dispatchList({type: 'set'});
    }, 1000);
  }, []);

  const initialState = {
    pageToken: [],
    moreList: [],
  };
  let [state, dispatchList] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'set':
        return {
          pageToken: playList.pageToken,
          moreList: playList.videoInfo,
        };
      case 'next':
        return {
          pageToken: playList.pageToken,
          moreList: state.moreList.concat(playList.videoInfo),
        };
      default:
        throw new Error();
    }
  }

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
            style={{width: 150, height: 80, resizeMode: 'cover'}}
          />
        </View>
        <View style={style.itemTitleBox}>
          <Text numberOfLines={2} style={style.title}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
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
    <View style={style.bannerHeader}>
      <Text style={style.bannerTitle}>{bannerTitle}</Text>
      <Text style={style.date}>{bannerDesc}</Text>
      <FlatList
        data={state.moreList}
        renderItem={renderVideo}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScrollEndDrag={() => {
          !playList.pageToken.nextPageToken
            ? {}
            : _getPlayList(
                plId,
                setPageToken(`pageToken=${playList.pageToken.nextPageToken}`),
              );
          playList.pageToken.nextPageToken === state.pageToken.nextPageToken
            ? {}
            : dispatchList({type: 'next'});
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBox: {
    backgroundColor: palette.textColor,
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginTop: 10,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  title: {
    color: palette.backgroundColor,
    fontSize: normalize(10),
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#8e8e8e',
    fontSize: normalize(11),
  },
  header: {
    flex: 1,
    marginTop: 5,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  itemTitleBox: {
    width: 150,
    paddingTop: 3,
    paddingHorizontal: 15,
  },
  bannerHeader: {
    marginTop: 15,
    marginLeft: 10,
  },
  bannerTitle: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    color: palette.backgroundColor,
  },
});

export default HomeVideoComponent;
