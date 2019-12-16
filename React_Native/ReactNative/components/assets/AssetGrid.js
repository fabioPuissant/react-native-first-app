import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { getTickets } from '../../redux/actions/ticketActions';
import AssetItem from './AssetItem';

const AssetGrid = ({ assets, navigation, ticket: { tickets }, getTickets }) => {
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <View>
      <FlatList
        data={assets}
        renderItem={itemData => {
          return (
            <AssetItem
              asset={itemData.item}
              tickets={tickets.filter(t => t.assetId === itemData.item.id)}
              navigation={navigation}
            />
          );
        }}
        numColumns={2}
        keyExtractor={(item, index) => {
          item.id;
        }}
      ></FlatList>
    </View>
  );
};
const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(mapStateToProps, { getTickets })(AssetGrid);
