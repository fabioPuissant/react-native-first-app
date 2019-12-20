import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Avatar } from 'react-native-paper';
import AddTicket from '../components/tickets/AddTicket';
import SearchBarAssets from '../layout/SearchBarAssets';

//searchbar assets op naam van assets
//toon lijst met id en roomid
const TicketAddScreen = props => {

  const [value, setValue] = useState('')
  return (
    <View>
      <SearchBarAssets
        confirmInputHandler={confirmInputHandler}
        assetNameInputHandler={text => setValue(text)}
        enteredValue={value}
      />
      <AddTicket />
    </View>
  );
};


const styles = StyleSheet.create({
});

TicketAddScreen.propTypes = {};

export default connect(null, {})(TicketAddScreen);