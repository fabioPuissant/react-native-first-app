import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Header from '../../layout/Header';
import TicketItem from './TicketItem';

const getTickets = AssetId => {
  return fetch('localhost/tickets')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.find(ticket => ticket.assetId == assetId);
    })
    .catch(error => {
      console.log(error);
    });
};

const TicketList = () => {
  return (
    <View>
      <Header title='Tickets from AssetX' />
      <FlatList
        data={getTickets(1)}
        renderItem={({ ticket }) => (
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

export default TicketList;
