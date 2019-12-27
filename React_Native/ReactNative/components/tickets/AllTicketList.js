import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import TicketItem from './TicketItem';

import { connect } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketActions';


const AllTicketList = ({ navigation, ticket: { allTickets }, getTickets}) => {

  useEffect(() => {
    getTickets();
    console.log(allTickets)
  }, [allTickets]);

  return (
    <View>
      <FlatList
        removeClippedSubviews={false}
        data={allTickets}
        renderItem={({ item }) => <TicketItem ticket={item} navigation={navigation} />}
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
  ticket: state.ticket
});

// EXPORT FOR REDUX
export default connect(mapStateToProps, {
  getTickets
})(AllTicketList);
