import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Header from '../../layout/Header';
import TicketItem from './TicketItem';


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
