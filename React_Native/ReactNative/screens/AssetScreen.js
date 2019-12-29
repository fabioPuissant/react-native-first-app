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
import { TextInput, Banner, Button, Title, FAB } from 'react-native-paper';
import TicketList from '../components/tickets/TicketList';
import styles from './screenStyles';

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
      <TicketList
        currentAsset={current}
        navigation={navigation}
        tickets={tickets}
      />
      <FAB
        style={styles.fab}
        icon='plus'
        onPress={() =>
          navigation.navigate('TicketAddScreen', {
            assetNameParam: current.name
          })
        }
      />
    </View>
  );
};

AssetScreen.navigationOptions = {
  headerTitle: 'Asset screen'
};
AssetScreen.propTypes = {};

const mapStateToProps = state => ({
  asset: state.asset,
  ticket: state.ticket
});

export default connect(mapStateToProps, { setCurrentAsset, getTicketsOfAsset })(
  AssetScreen
);
