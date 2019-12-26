import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


import Home from '../screens/Home';
import RoomScreen from '../screens/RoomScreen';
import TicketAddScreen from '../screens/TicketAddScreen';
import AssetScreen from '../screens/AssetScreen';
import TicketScreen from '../screens/TicketScreen';

const ApplicationNavigator = createStackNavigator(
  {
    HomeScreen: Home,
    RoomScreen: RoomScreen,
    TicketAddScreen: TicketAddScreen,
    AssetScreen: AssetScreen,
    TicketScreen: TicketScreen
  }
);

const MainNavigator = createDrawerNavigator(
  {
    application: ApplicationNavigator
  },
  {
    navigationOptions: {
      headerVisible: true,
    }
  }
);

export default createAppContainer(MainNavigator);