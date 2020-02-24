import React, {reducer} from 'react';
import {SafeAreaView} from 'react-native';
import MostVideo from './MostVideoComponent';
import MainHeader from '../MainHeader';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 8}}>
      <MainHeader navigation={navigation} />
      <MostVideo navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
