import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TicketAddScreen = props => {
  return (<View>
    <Header title="Add Ticket" />
    <View>
      <Text>assetId</Text>
      <TextInput></TextInput>
    </View>
    <View>
      <Text>votes</Text>
      <TextInput></TextInput>
    </View>
    <View>
      <Text>description</Text>
      <TextInput></TextInput>
    </View>
  </View>);
};

const styles = StyleSheet.create({

});

TicketAddScreen.propTypes = {};

export default connect(null, {})(TicketAddScreen);
