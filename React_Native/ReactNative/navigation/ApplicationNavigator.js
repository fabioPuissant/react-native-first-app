import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Home from '../screens/Home';
import RoomScreen from '../screens/RoomScreen';
import TicketAddScreen from '../screens/TicketAddScreen';
import AssetScreen from '../screens/AssetScreen';
import TicketScreen from '../screens/TicketScreen';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/Colors';

const MainNavigator = createDrawerNavigator(
  {
    Home: Home,
    Assets: AssetScreen,
    Tickets: TicketScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Rooms Management App',
      headerLeft:
        (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="menu" iconName="ios-menu" onPress={() => {
            navigation.toggleDrawer();
          }} />
        </HeaderButtons>),
      headerStyle: {
        backgroundColor: colors.primaryColor
      },
      headerTintColor: 'white',
      headerVisible: true,
    })
  }
);

const ApplicationNavigator = createStackNavigator({ RootStack: { screen: MainNavigator } })

export default createAppContainer(ApplicationNavigator);