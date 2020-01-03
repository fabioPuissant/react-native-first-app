import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import TicketItem from './TicketItem';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/actions/ticketActions';
import styles from './ticketStyles';
import SearchBarUpvotes from '../../layout/SearchBarUpvotes';

const AllTicketList = ({ navigation, ticket: { allTickets }, getTickets }) => {
  useEffect(() => {
    getTickets();
  }, []);

  const [enteredValue, setEnteredValue] = useState();
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [displayedTickets, setDisplayedTickets] = useState({ allTickets });

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number greather than 0.',
        [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  if (selectedNumber) {
    const foundTickets = displayedTickets.filter(t => t.numberOfVotes >= selectedNumber);
    setDisplayedTickets(foundTickets);
  }

  return (
    <View>
      <SearchBarUpvotes
        numberInputHandler={numberInputHandler}
        confirmInputHandler={confirmInputHandler}
        enteredValue={enteredValue}
      />
      <FlatList
        removeClippedSubviews={false}
        data={allTickets}
        renderItem={({ item }) => (
          <TicketItem ticket={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  ticket: state.ticket
});

// EXPORT FOR REDUX
export default connect(mapStateToProps, {
  getTickets
})(AllTicketList);
