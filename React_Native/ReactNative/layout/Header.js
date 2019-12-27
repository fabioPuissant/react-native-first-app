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

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 20
  }
});

export default Header;
