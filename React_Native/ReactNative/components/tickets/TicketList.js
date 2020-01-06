import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import TicketItem from './TicketItem';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketActions';
import styles from './ticketStyles';

const TicketList = ({ currentAsset, navigation, tickets }) => {
  return (
    <View style={styles.flexOne}>
      <FlatList
        removeClippedSubviews={false}
        data={tickets.filter(t => t.assetId === currentAsset.id)}
        renderItem={({ item }) => (
          <TicketItem ticket={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  ticket: state.ticket
});

// EXPORT FOR REDUX
export default connect(mapStateToProps, {
  getTickets
})(TicketList);
