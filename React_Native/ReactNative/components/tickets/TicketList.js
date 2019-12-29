import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import TicketItem from './TicketItem';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketActions';
import styles from './ticketStyles';

const TicketList = ({ asset: { current }, currentAsset, navigation, ticket: { allTickets }, getTicketsOfAsset }) => {
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <View>
      <FlatList
        removeClippedSubviews={false}
        data={allTickets.filter(t => t.assetId === currentAsset.id)}
        renderItem={({ item }) => <TicketItem ticket={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  ticket: state.ticket,
  asset: state.asset
});

// EXPORT FOR REDUX
export default connect(mapStateToProps, {
  getTickets
})(TicketList);
