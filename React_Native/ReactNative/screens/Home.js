import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoomsList from '../components/rooms/RoomsList';
import RoomScreen from '../screens/RoomScreen';
import TicketAddScreen from '../screens/TicketAddScreen';

const Home = props => {
  return <TicketAddScreen navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default Home;
