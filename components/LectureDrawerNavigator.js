import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from './HomeComponent/Home';
// import LectureStackNavigation from './StackNavigators/LectureStackNavigation';
import LectureList from './LectureComponent/LectureList';
import * as env from '../env';
import BookList from './BookComponent/BookList';
import CheatSheet from './StackNavigators/CheatSheetStackNavigation';

const LectureDarwerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    HTML: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_HTML}
          lecture="HTML"
        />
      ),
    },
    CSS: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_CSS}
          lecture="CSS"
        />
      ),
    },
    JavaScript: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_JS}
          lecture="JS"
        />
      ),
    },
    Python: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_PYTHON}
          lecture="Python"
        />
      ),
    },
    Django: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_DJANGO}
          lecture="Django"
        />
      ),
    },
    DataAnalysis: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_DATA_ANALYSIS}
          lecture="데이터 분석"
        />
      ),
    },
    Etc: {
      screen: props => (
        <LectureList
          navigation={props.navigation}
          plId={env.PL_ETC}
          lecture="기타"
        />
      ),
      navigationOptions: {
        drawerLabel: '협업툴 Etc.',
      },
    },
    Book: {
      screen: BookList,
      navigationOptions: {
        drawerLabel: '책 목록',
      },
    },
    Sheet: {
      screen: CheatSheet,
      navigationOptions: {
        drawerLabel: '치트시트',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: '#55a79a',
    },
  },
);
export default LectureDarwerNavigator;
