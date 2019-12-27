import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Keyboard,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBarAssets from '../layout/SearchBarAssets';
import { TextInput, Banner, Button, Title } from 'react-native-paper';
import TicketList from '../components/tickets/TicketList';
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
    <View>
      <TicketList
        currentAsset={current}
        navigation={navigation}
        tickets={tickets}
      />
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

export default connect(mapStateToProps, { setCurrentAsset, getTicketsOfAsset })(
  AssetScreen
);
