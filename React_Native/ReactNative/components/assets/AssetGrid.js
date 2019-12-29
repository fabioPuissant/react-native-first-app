import React, { useEffect, useCallback } from 'react';
import { useFocusEffect } from 'react-navigation-hooks';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import { getTickets } from '../../redux/actions/ticketActions';
import AssetItem from './AssetItem';
import FadeInView from '../../layout/FadeInView';
import styles from './assetStyles';
import { setCurrentAsset } from '../../redux/actions/assetActions';

const AssetGrid = ({
  assets,
  navigation,
  ticket: { allTickets },
  getTickets
}) => {
  useEffect(() => {
    getTickets();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getTickets();
      return () => console.debug();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={assets}
        renderItem={itemData => {
          return (
            <AssetItem
              key={itemData.id}
              index={itemData.index}
              asset={itemData.item}
              tickets={allTickets.filter(t => t.assetId === itemData.item.id)}
              navigation={navigation}
              setCurrentAsset={setCurrentAsset}
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(mapStateToProps, { getTickets, setCurrentAsset })(
  AssetGrid
);
