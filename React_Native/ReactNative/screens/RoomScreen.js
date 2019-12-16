import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import Header from '../layout/Header';
import AssetGrid from '../components/assets/AssetGrid';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../redux/actions/assetActions';

const RoomScreen = ({
  navigation,
  room: { current },
  asset: { assets },
  findAssetsOfRoom
}) => {
  useEffect(() => {
    findAssetsOfRoom(current);
  }, []);

  return (
    <View>
      <Header title={`Detail ${current.name}`} navigation={navigation} />
      {!assets && assets.length === 0 ? (
        <Text>No Assets found</Text>
      ) : (
        <AssetGrid assets={assets} navigation={navigation} />
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
