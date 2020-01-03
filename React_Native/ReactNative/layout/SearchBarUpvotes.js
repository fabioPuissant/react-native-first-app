import React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBarUpvotes = props => {
    return (
        <Searchbar
            placeholder='amount of upvotes or higher'
            onChangeText={props.numberInputHandler}
            onSubmitEditing={props.confirmInputHandler}
            value={props.enteredValue}
            keyboardType={'number-pad'}
        />
    );
};

export default SearchBarUpvotes;
