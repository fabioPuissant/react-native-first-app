import React from 'react';
import { SearchBar } from 'react-native-paper';

/**
 * search assets by ticket name
 */
const SearchBarAssets = props => {
    return (
        <SearBar
            placeholder="Search by ticket name"
            onChangeText={props.ticketNameInputHandler}
            onSubmitEditing={props.confirmInputHandler}
            value={props.enteredValue} />
    )
};

export default SearchBarAssets;