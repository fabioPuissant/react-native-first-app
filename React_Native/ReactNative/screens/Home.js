import React from 'react';

import RoomsList from '../components/rooms/RoomsList';

const Home = props => {
  return <RoomsList navigation={props.navigation} />;
};

export default Home;
