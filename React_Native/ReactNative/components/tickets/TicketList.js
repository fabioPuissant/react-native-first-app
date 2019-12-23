import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import TicketItem from './TicketItem';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketActions';


const TicketList = ({ ticket: { tickets }, getTickets }) => {
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <View>
      <FlatList
        data={tickets}
        renderItem={(ticket) => (
          <TicketItem
            id={ticket.id}
            assetId={ticket.description}
            numberOfVotes={ticket.numberOfVotes}
            description={ticket.description}
          />
        )}
        keyExtractor={ticket => ticket.id}
      ></FlatList>
    </View>
  );
};

const mapStateToProps = state => ({
  ticket: state.ticket
})

export default connect(mapStateToProps, {
  getTickets
})(TicketList);
