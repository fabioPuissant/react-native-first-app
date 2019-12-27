import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { setCurrentTicket } from '../redux/actions/ticketActions';
import Header from '../layout/Header';

import TicketDetailItem from '../components/tickets/TicketDetailItem';

const TicketScreen = props => {
  const ticket = props.navigation.getParam('ticketParam');
  props.setCurrentTicket(ticket);

  return (
    <View>
      <Header navigation={props.navigation} title={'Ticket details'} />
      <TicketDetailItem navigation={props.navigation} />
    </View>
  );
};

export default connect(null, { setCurrentTicket })(TicketScreen);
