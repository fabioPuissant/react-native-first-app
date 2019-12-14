import React from 'react';
import { connect } from 'react-redux';

import setCurrentRoom from '../../redux/actions/roomActions';
import { Text } from 'react-native';

const RoomItem = ({ room }) => {
  return <Text>{room.name}</Text>;
};

export default connect(null, { setCurrentRoom })(RoomItem);
