import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { getTickets } from '../../redux/actions/ticketActions';
import AssetItem from './AssetItem';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../../redux/actions/assetActions';

const AssetGrid = ({ assets, navigation, ticket: { tickets }, getTickets }) => {
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <FlatList
      style={styles.container}
      data={assets}
      renderItem={itemData => {
        return (
          <AssetItem
            key={itemData.id}
            index={itemData.index}
            asset={itemData.item}
            tickets={tickets.filter(t => t.assetId === itemData.item.id)}
            navigation={navigation}
            setCurrentAsset={setCurrentAsset}
          />
        );
      }}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 }
});

const mapStateToProps = state => ({
  ticket: state.ticket
  
});

export default connect(mapStateToProps, { getTickets, setCurrentAsset })(AssetGrid);
