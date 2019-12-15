import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import RoomScreen from '../screens/RoomScreen';

// Config different screens here
const ApplicationNavigator = createStackNavigator({
  HomeScreen: Home,
  RoomScreen: RoomScreen
});

export default createAppContainer(ApplicationNavigator);
