import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import SearchBarAssets from '../layout/SearchBarAssets';
import AssetGridLess from '../components/assets/AssetGridLess';

const AssetScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const assetNameInputHandler = text => {
    setEnteredValue(text);
  };

  const confirmInputHandler = () => {
    const foundAssets = enteredValue;
  };

  return (
    <View>
      {/* <SearchBarAssets
        placeholder="search for assets by name"
        assetNameInputHandler={assetNameInputHandler}
        confirmInputHandler={confirmInputHandler}
        enteredValue={enteredValue}
      /> */}
      <AssetGridLess />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

//AssetScreen.propTypes = {};

export default AssetScreen;
//export default connect(null, {})(AssetScreen);