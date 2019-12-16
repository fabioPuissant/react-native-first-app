import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

const SearchBarHappiness = props => {
  return (
    <Searchbar
      placeholder='Search rooms with score greather than...'
      onChangeText={props.numberInputHandler}
      onSubmitEditing={props.confirmInputHandler}
      value={props.enteredValue}
    />
  );
};

export default SearchBarHappiness;
