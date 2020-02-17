import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavigation from './BottomNavigation';
import License from './License';
import MainHeader from './MainHeader';
import CheatSheet from './StackNavigators/CheatSheetStackNavigation';
import palette from '../style/palette';

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: BottomNavigation,
      navigationOptions: ({navigation}) => ({
        // header: () => <MainHeader navigation={navigation} />,
        headerShown: false,
      }),
    },
    License: {
      screen: License,
      navigationOptions: {
        title: '오픈소스 라이선스',
      },
    },
    CheatSheet: {
      screen: CheatSheet,
      navigationOptions: {
        title: '',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: palette.tabColor,
      },
      // headerTintColor: palette.textColor,
    },
  },
);

export default createAppContainer(HomeStackNavigator);
