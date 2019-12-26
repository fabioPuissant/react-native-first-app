import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../layout/Header';
import { TextInput } from 'react-native-paper';


const TicketScreen = props => {

  return (
    <View>
      <Header navigation={props.navigation} title={'Hello ticket screen'} />
      
      <Text>TicketScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

TicketScreen.propTypes = {};

export default connect(null, {})(TicketScreen);
