import React, {setState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';
import MostVideoComponent from './MostVideoComponent';
import palette from '../../style/palette';
import MainHeader from '../MainHeader';

const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#f9f9f9', paddingHorizontal: 8}}>
      <MainHeader navigation={navigation} />
      <MostVideoComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
