import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, StyleSheet, Keyboard, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBarAssets from '../layout/SearchBarAssets';
import { TextInput, Banner, Button, Title, FAB } from 'react-native-paper';
import AllTicketList from '../components/tickets/AllTicketList';
import AssetGridLess from '../components/assets/AssetGridLess';

import {
  getTickets,
  getTicketsOfAsset,
  upVoteTicket
} from '../redux/actions/ticketActions';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../redux/actions/assetActions';

const AssetScreen = ({
  navigation,
  asset: { current },
  ticket: { tickets },
  getTicketsOfAsset
}) => {

  const [enteredValue, setEnteredValue] = useState('');

  const assetNameInputHandler = text => {
    setEnteredValue(text);
  };

  const confirmInputHandler = () => {
    const foundAssets = enteredValue;
  };

  useEffect(() => {
    getTicketsOfAsset(current);
  }, []);

  return (
    <View style={styles.view}>
      <AllTicketList navigation={navigation} tickets={tickets} />
      {/* <SearchBarAssets
        placeholder="search for assets by name"
        assetNameInputHandler={assetNameInputHandler}
        confirmInputHandler={confirmInputHandler}
        enteredValue={enteredValue}
      /> */}
      {/* <AssetGridLess /> */}
      {/* <View> */}

      {/* </View> */}
    </View>
  );
};

AssetScreen.navigationOptions = {
  headerTitle: 'Asset screen'
};
AssetScreen.propTypes = {};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleText: {
    color: '#5E00EA'
  },
  view: {
    flex: 1,
    backgroundColor: '#e6f2ff'
  },
  fab: {
    position: 'absolute',
    margin: 20,
    bottom: 0,
    right: 0
  },
});

const mapStateToProps = state => ({
  asset: state.asset,
  ticket: state.ticket
});

export default connect(mapStateToProps, { setCurrentAsset, getTicketsOfAsset })(AssetScreen);
