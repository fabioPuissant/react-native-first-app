import React, { useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useFocusEffect } from 'react-navigation-hooks';

import TicketItem from './TicketItem';

import { connect } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketActions';

const TicketList = ({
  asset: { current },
  currentAsset,
  navigation,
  ticket: { allTickets }
}) => {
  useEffect(() => {
    getTickets();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getTickets();
      return () => console.log();
    }, [])
  );

  return (
    <View>
      <FlatList
        removeClippedSubviews={false}
        data={allTickets.filter(t => t.assetId === currentAsset.id)}
        renderItem={({ item }) => (
          <TicketItem ticket={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerHoriz: {
    padding: 20
  }
});

const mapStateToProps = state => ({
  ticket: state.ticket,
  asset: state.asset
});

// EXPORT FOR REDUX
export default connect(mapStateToProps, {
  getTickets
})(TicketList);
