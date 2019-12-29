import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';
import TicketList from '../components/tickets/TicketList';
import { setCurrentAsset } from '../redux/actions/assetActions';
import { getTickets } from '../redux/actions/ticketActions';
import styles from './screenStyles';

const AssetScreen = ({
  navigation,
  asset: { current, added },
  ticket: { allTickets, changed },
  getTickets
}) => {
  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    getTickets();
    console.log('Updating now');
  }, [changed, added]);

  return (
    <View style={styles.view}>
      <TicketList
        currentAsset={current}
        navigation={navigation}
        tickets={allTickets}
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

export default connect(mapStateToProps, { setCurrentAsset, getTickets })(
  AssetScreen
);
