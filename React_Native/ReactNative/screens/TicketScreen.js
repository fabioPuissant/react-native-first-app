import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../layout/Header';
import { TextInput } from 'react-native-paper';
import TicketDetailItem from '../components/tickets/TicketDetailItem';


const TicketScreen = props => {
  const ticket = props.navigation.getParam('ticketParam');

  return (
    <View>
      <Header navigation={props.navigation} title={'Ticket details'} />
      
      <TicketDetailItem ticket={ticket} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({

});

TicketScreen.propTypes = {};

export default connect(null, {})(TicketScreen);
