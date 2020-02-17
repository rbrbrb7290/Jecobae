import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../HomeComponent/Home';
import LectureList from '../LectureComponent/LectureList';
import LectureVideo from '../LectureComponent/LectureVideo';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    LectureList: {
      screen: LectureList,
    },
    LectureVideo: {
      screen: LectureVideo,
    },
  },
  {
    headerMode: 'none',
  },
);

export default HomeStack;
