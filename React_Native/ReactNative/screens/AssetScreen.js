import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../layout/Header';

const AssetScreen = props => {
  return (
    <View>
      <Header navigation={props.navigation} title={'Hello assert screen'} />

      <Text>AssetScreen</Text>
    </View>
  );
};

AssetScreen.propTypes = {};

export default connect(null, {})(AssetScreen);
