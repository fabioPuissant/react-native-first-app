import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = props => {
  return (
    <Appbar.Header>
      {props.navigation ? (
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
      ) : null}
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
};

export default Header;
