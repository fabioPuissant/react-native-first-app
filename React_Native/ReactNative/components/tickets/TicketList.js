import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import TicketItem from './TicketItem';

import { connect } from 'react-redux';
import { getTicketsOfAsset } from '../../redux/actions/ticketActions';


const TicketList = ({ asset, navigation, tickets }) => {

  // useEffect(() => {
  //   getTicketsOfAsset(asset.id);
  // }, []);

  let datas = [
    { id: 0, numberOfVotes: 10, description: "test1" },
    { id: 1, numberOfVotes: 11, description: "test2" },
    { id: 2, numberOfVotes: 12, description: "test3" },
    { id: 3, numberOfVotes: 13, description: "test" },
    { id: 4, numberOfVotes: 14, description: "test4" },
  ]

  let propValue;
  let count = 0;
  for (propName in datas[0]) {
    propValue = Object.values(datas[0])[count]
    count++;
    console.log(propName, propValue);
  }

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={itemData => (
          <TicketItem
            key={itemData.id.toString()}
            ticket={itemData.item}
            navigation={navigation}
          />
        )
        }
      />
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
