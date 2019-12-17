import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../layout/Header';
import SearchBarAssets from '../layout/SearchBarAssets';
import { TextInput } from 'react-native-paper';


const AssetScreen = props => {
  const [confirmed, setConfirmed] = useState(true);

  const confirmInputHandler = () => {
    const ticketName = enteredValue;
    setConfirmed(true);
    Keyboard.dismiss();
  }

  if (confirmed) {
    fetch()
  }

  return (
    <View>
      <Header navigation={props.navigation} title={'Hello assert screen'} />
      <SearchBarAssets
        ticketNameInputHandler={ticketNameInputHandler}
        confirmInputHandler={confirmInputHandler}
        enteredValue={enteredValue}
      />
      <Text>AssetScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

AssetScreen.propTypes = {};

export default connect(null, {})(AssetScreen);
