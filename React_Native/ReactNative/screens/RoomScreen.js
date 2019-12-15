import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRooms } from '../redux/actions/roomActions';
import { setCurrentAsset } from '../redux/actions/assetActions';
const RoomScreen = ({ room: { current } }) => {
  return <Text>Room screen</Text>;
};

RoomScreen.propTypes = {};

const mapStateToProps = state => ({
  room: state.room,
  asset: state.asset
});

export default connect(mapStateToProps, { getRooms, setCurrentAsset })(
  RoomScreen
);
