import React, { useEffect, useState } from 'react';
import { Text, FlatList,Image ,View, StyleSheet, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../layout/Header';
import SearchBarAssets from '../layout/SearchBarAssets';
import { TextInput, Banner, Button, Title } from 'react-native-paper';
import TicketList from '../components/tickets/TicketList';

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
  useEffect(() => {
    getTicketsOfAsset(current);
  }, []);

  return (
    <View>
      <Header navigation={navigation} title={'Asset screen'} />
      <TicketList asset={current} navigation={navigation} tickets={tickets}/>
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
  }
});

const mapStateToProps = state => ({
  asset: state.asset,
  ticket: state.ticket
});

export default connect(mapStateToProps, {setCurrentAsset, getTicketsOfAsset})(AssetScreen);
