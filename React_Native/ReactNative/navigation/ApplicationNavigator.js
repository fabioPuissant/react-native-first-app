import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import RoomScreen from '../screens/RoomScreen';
import TicketAddScreen from '../screens/TicketAddScreen';
import AssetScreen from '../screens/AssetScreen';

// Config different screens here
const ApplicationNavigator = createStackNavigator(
  {
    HomeScreen: Home,
    RoomScreen: RoomScreen,
    TicketAddScreen: TicketAddScreen,
    AssetScreen: AssetScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(ApplicationNavigator);
