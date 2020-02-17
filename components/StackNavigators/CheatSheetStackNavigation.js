import {createStackNavigator} from 'react-navigation-stack';
import SheetMain from '../CheatSheet/SheetMain';
import Sheet from '../CheatSheet/Sheet';
const MainStack = createStackNavigator(
  {
    SheetMain: {
      screen: SheetMain,
    },
    Sheet: {
      screen: Sheet,
    },
  },
  {
    headerMode: 'none',
  },
);

export default MainStack;
