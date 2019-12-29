import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Stylesheet } from 'react-native';
import Header from '../layout/Header';
import { findAllAssets } from '../redux/actions/assetActions';
import { setCurrentAsset } from '../redux/actions/assetActions';
import AssetGrid from '../components/assets/AssetGrid';
import styles from './screenStyles';

const AllAssetsScreen = ({
  navigation,
  findAllAssets,
  setCurrentAsset,
  asset: { assets, current }
}) => {
  useEffect(() => {
    findAllAssets();
  }, []);

  return (
    <View style={styles.flex}>
      <Header title={'All assets screen'} />
      <AssetGrid navigation={navigation} assets={assets} />
    </View>
  );
};

const mapStateToProps = state => ({
  asset: state.asset
});

export default connect(mapStateToProps, { findAllAssets, setCurrentAsset })(
  AllAssetsScreen
);
