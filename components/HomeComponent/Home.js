import React, {reducer} from 'react';
import {SafeAreaView, ScrollView, Platform} from 'react-native';
import HomeVideoComponents from './HomeVideoComponents';
import MainHeader from '../MainHeader';
import * as env from '../../env';
import {} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 8}}>
      <ScrollView>
        <MainHeader navigation={navigation} />
        <HomeVideoComponents
          navigation={navigation}
          playListId={env.PL_POP}
          bannerTitle={'시청 중인 강좌'}
          bannerDesc={'"마지막으로 시청한 영상들 입니다"'}
        />
        <HomeVideoComponents
          navigation={navigation}
          playListId={env.PL_PYTHON}
          bannerTitle={'인기 강좌'}
          bannerDesc={'"제코베에 인기 영상들을 모았어요"'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
