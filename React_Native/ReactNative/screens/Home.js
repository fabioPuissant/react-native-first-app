import React from 'react';
import { View, StyleSheet } from 'react-native';
import RoomsList from '../components/rooms/RoomsList';
const Home = props => {
  console.log(props);
  return <RoomsList navigation={props.navigation} />;
};

const styles = StyleSheet.create({});

export default Home;
