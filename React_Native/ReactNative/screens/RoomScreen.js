import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../layout/Header';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../redux/actions/assetActions';

const RoomScreen = ({
  navigation,
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
      <Header title=' Rooms' navigation={navigation} />
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
RoomScreen.navigationOptions = {
  headerTitle: 'Home screen'
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
