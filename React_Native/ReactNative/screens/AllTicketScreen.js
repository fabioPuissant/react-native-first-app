import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AllTicketList from '../components/tickets/AllTicketList';
import styles from './screenStyles';
import { useFocusEffect } from 'react-navigation-hooks';

import { getTicketsOfAsset } from '../redux/actions/ticketActions';

import { setCurrentAsset } from '../redux/actions/assetActions';

const AssetScreen = ({
  navigation,
  asset: { current },
  ticket: { tickets },
  getTicketsOfAsset
}) => {
  return (
    <View style={styles.view}>
      <AllTicketList navigation={navigation} tickets={tickets} />
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
