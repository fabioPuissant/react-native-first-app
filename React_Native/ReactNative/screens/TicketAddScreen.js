import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Avatar } from 'react-native-paper';
import AddTicket from '../components/tickets/AddTicket';
import SearchBarAssets from '../layout/SearchBarAssets';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Header from '../layout/Header';

//searchbar assets op naam van assets
//toon lijst met id en roomid
const TicketAddScreen = props => {

  return (
    <View>
      <AddTicket />
    </View>
  );
};


const styles = StyleSheet.create({
});

TicketAddScreen.navigationOptions = navData => {
  return {
    headerTitle: 'AddTicket',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="menu" iconName="ios-menu" onPress={() => {
        navData.navigation.toggleDrawer();
      }} />
    </HeaderButtons>)
  };

}

TicketAddScreen.propTypes = {};

export default connect(null, {})(TicketAddScreen);