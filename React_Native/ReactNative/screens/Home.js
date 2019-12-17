import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoomsList from '../components/rooms/RoomsList';
import RoomScreen from '../screens/RoomScreen';
import TicketList from '../components/tickets/TicketList';

const Home = props => {
  return <RoomsList navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default Home;
