import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';

import AssetItem from './AssetItem';

const AssetGrid = ({ assets, navigation, setCurrent }) => {
  return (
    <View>
      <FlatList
        data={assets}
        renderItem={itemData => {
          return <AssetItem asset={itemData.item} navigation={navigation} />;
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
  asset: state.asset
});

export default connect(mapStateToProps)(AssetGrid);
