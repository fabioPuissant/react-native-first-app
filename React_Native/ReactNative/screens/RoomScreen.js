import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../redux/actions/assetActions';

const RoomScreen = ({
  room: { current },
  asset: { assets },
  clearCurrentAsset,
  setCurrentAsset,
  findAssetsOfRoom
}) => {
  useEffect(() => {
    findAssetsOfRoom(current);
  }, []);

  return (
    <View>
      {!assets && assets.length === 0 ? (
        <Text>No Assets found</Text>
      ) : (
        assets.map(as => (
          <Text key={as.id}>
            {as.name} {as.roomId}
          </Text>
        ))
      )}
    </View>
  );
};

RoomScreen.propTypes = {};

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  asset: state.asset,
  room: state.room
});

export default connect(mapStateToProps, {
  clearCurrentAsset,
  setCurrentAsset,
  findAssetsOfRoom
})(RoomScreen);
