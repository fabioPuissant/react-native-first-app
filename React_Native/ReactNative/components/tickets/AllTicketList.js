import React, { useEffect, useState } from 'react';
import { View, FlatList, Keyboard, Alert } from 'react-native';
import PropTypes from 'prop-types';
import TicketItem from './TicketItem';
import { connect } from 'react-redux';
import {
  getTickets,
  setCurrentTicket
} from '../../redux/actions/ticketActions';
import styles from './ticketStyles';
import SearchBarUpvotes from '../../layout/SearchBarUpvotes';

const AllTicketList = ({
  navigation,
  ticket: { allTickets, changed },
  getTickets,
  setCurrentTicket
}) => {
  useEffect(() => {
    getTickets();
  }, []);

  const [enteredValue, setEnteredValue] = useState();
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [displayedTickets, setDisplayedTickets] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [secondConfirm, setSecondConfirm] = useState(true);

  useEffect(() => {
    if (secondConfirm) {
      setDisplayedTickets(allTickets);
    }
  });

  useEffect(() => {
    getTickets();
  }, [changed]);

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert(
        'Invalid number',
        'The number of upvotes has to be greater than 0.',
        [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const numberInputHandler = inputText => {
    if (inputText == '') {
      setSecondConfirm(true);
      setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    } else {
      setSecondConfirm(false);
      setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
  };

  if (confirmed) {
    const foundTickets = displayedTickets.filter(
      t => t.numberOfVotes >= selectedNumber
    );
    setDisplayedTickets(foundTickets);
    setConfirmed(false);
    setSecondConfirm(false);
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
        data={displayedTickets}
        renderItem={({ item }) => (
          <TicketItem
            onPress={() => setCurrentTicket(item)}
            ticket={item}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

AllTicketList.prototypes = {};

const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(mapStateToProps, {
  getTickets,
  setCurrentTicket
})(AllTicketList);
