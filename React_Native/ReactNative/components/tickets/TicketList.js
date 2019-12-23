import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../layout/Header';
import TicketItem from './TicketItem';

import { connect } from 'react-redux';
import { getTicketsOfAsset } from '../../redux/actions/ticketActions';


const TicketList = ({ asset, navigation, tickets }) => {

  useEffect(() => {
    getTicketsOfAsset(asset.id);
  }, []);

  const datas = [
    { id: 0,numberOfVotes: 10, description: "test1"},
    { id: 1,numberOfVotes: 11, description: "test2"},
    { id: 2,numberOfVotes: 12, description: "test3"},
    { id: 3,numberOfVotes: 13, description: "test"},
    { id: 4,numberOfVotes: 14, description: "test4"},
    
  ]

  console.log("this is the data: " + tickets.forEach(element => {
    element.toString() + "\n"
  }))

  return (
    <View>
      <Header title='Tickets from AssetX' />
      <FlatList
        data={datas}
        renderItem={itemData => {
          
          return (
            <TicketItem
              key={itemData.id}
              ticket={itemData.item}
              navigation={navigation}
            />
          );
        }}

      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  centerHoriz: {
    padding: 20
  }
});

// TicketList.propTypes = {
//   ticket: PropTypes.object.isRequired,
//   getTicketsOfAsset: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  ticket: state.ticket
});

// EXPORT FOR REDUX
export default connect(mapStateToProps, {
  getTicketsOfAsset
})(TicketList);
