import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeStackNavigation from './StackNavigators/HomeStackNavigation';
import BookList from './BookComponent/BookList';
import CheatSheet from './StackNavigators/CheatSheetStackNavigation';
import LectureStackNavigation from './StackNavigators/LectureStackNavigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import palette from '../style/palette';

const iconSize = 30;

const BottomNavi = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigation,
      navigationOptions: {
        tabBarLabel: '홈',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name={'home'}
            color={tintColor}
            size={iconSize}
            style={{width: iconSize, height: iconSize}}
          />
        ),
      },
    },
    Lecture: {
      screen: LectureStackNavigation,
      navigationOptions: {
        tabBarLabel: '카테고리',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name={'playlist-play'}
            color={tintColor}
            size={iconSize}
            style={{width: iconSize, height: iconSize}}
          />
        ),
      },
    },
    Book: {
      screen: BookList,
      navigationOptions: {
        drawerLabel: '책 목록',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name={'book-open-outline'}
            color={tintColor}
            size={iconSize}
            style={{width: iconSize, height: iconSize}}
          />
        ),
      },
    },
    Sheet: {
      screen: CheatSheet,
      navigationOptions: {
        title: '프리미엄',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon2
            name={focused ? 'ondemand-video' : 'personal-video'}
            color={tintColor}
            size={iconSize}
            style={{width: iconSize, height: iconSize}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: palette.mainColor,
      inactiveTintColor: '#a8a8a8',
      style: {
        backgroundColor: palette.textColor,
      },
    },
    initialRouteName: 'Home',
  },
);

export default BottomNavi;
