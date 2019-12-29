import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import { getTickets } from '../../redux/actions/ticketActions';

const AssetGrid = ({ assets, navigation, ticket: { tickets }, getTickets }) => {
  return (
    <FlatList
      style={[styles.container]}
      data={assets}
      renderItem={itemData => {
        return (
          <AssetItemLess
            key={itemData.id}
            index={itemData.index}
            asset={itemData.item}
            navigation={navigation}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 }
});

const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(mapStateToProps, { getTickets })(AssetGrid);
