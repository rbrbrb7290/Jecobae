import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {normalize} from 'react-native-elements';
import palette from '../../style/palette';
import {getPlayList} from '../../service/DataProcessor';
import * as env from '../../env';
const MostViewVideoList = ({navigation, plID}) => {
  const [playList, setPlayList] = useState(null);
  const [pageToken, setPageToken] = useState(null);
  const [plId] = useState(plID);
  
  const initialState = {
    moreList: [],
  };
  let [state, dispatchList] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      // case 'set' :
      //   return {
      //     playList:
      //   };
      case 'next':
        return {
          moreList: state.moreList.concat(Object.values(playList)),
        };
      default:
        throw new Error();
    }
  }

  const _getPlayList = async () => {
    setPlayList(await getPlayList(plId, pageToken));
  };
  useEffect(() => {
    _getPlayList().then();
  }, []);

  // console.log(state.moreList);
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
      <FlatList
        data={playList.videoInfo}
        renderItem={renderVideo}
        keyExtractor={item => item.videoId}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onScrollEndDrag={() => {
          _getPlayList(
            plId,
            setPageToken(`pageToken=${playList.pageToken.nextPageToken}`),
          );
          dispatchList({type: 'next'});
        }}
      />
  );
};
const MostVideoComponent = ({navigation}) => {
  return (
    <ScrollView>
      <View style={style.bannerHeader}>
        <Text style={style.bannerTitle}>시청 중인 강좌</Text>
        <Text style={style.date}>"마지막으로 시청한 영상들 입니다"</Text>
      </View>

      <View style={style.bannerHeader}>
        <Text style={style.bannerTitle}>제코베's 강좌</Text>
        <Text style={style.date}>"제코베에서만 볼 수 있는 강좌들이에요"</Text>
      </View>
      <MostViewVideoList navigation={navigation} plID={env.PL_PYTHON}/>
      <View style={style.bannerHeader}>
        <Text style={style.bannerTitle}>인기 강좌</Text>
        <Text style={style.date}>"제코베에 인기있는 영상들을 모았어요"</Text>
      </View>
      <MostViewVideoList navigation={navigation} plID={env.PL_POP}/>
    </ScrollView>
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

export default MostVideoComponent;
