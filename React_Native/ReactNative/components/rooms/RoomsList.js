import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBarHappiness from '../../layout/SearchBarHappiness';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { getRooms } from '../../redux/actions/roomActions';
import Header from '../../layout/Header';
import RoomItem from './RoomItem';
import styles from './roomStyles';

const RoomsList = ({ room: { rooms, current }, navigation, getRooms }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState(false);
  const [displayRooms, setDisplayRooms] = useState([]);

  useEffect(() => {
    setConfirmed(true);
  }, []);

  useEffect(() => {
    getRooms();
    setDisplayRooms(rooms);
  }, [confirmed]);

  useEffect(() => {
    getRooms();
    setDisplayRooms(rooms);
  }, []);

  useEffect(() => {
    getRooms();
    setDisplayRooms(rooms);
  }, [current]);

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

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

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  if (confirmed) {
    const foundRooms = rooms.filter(r => r.happinessScore >= selectedNumber);
    setDisplayRooms(foundRooms);
    setConfirmed(false);
  }

  return (
    <ScrollView>
      <Header title='All Rooms' />
      <SearchBarHappiness
        placeholder='Search Rooms with score or more'
        numberInputHandler={numberInputHandler}
        confirmInputHandler={confirmInputHandler}
        enteredValue={enteredValue}
      />
      <View style={styles.centerHoriz}>
        {!displayRooms && displayRooms.length === 0 ? (
          <Text>No rooms to show...</Text>
        ) : (
          displayRooms.map(room => (
            <RoomItem navigation={navigation} room={room} key={room.id} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

RoomsList.propTypes = {
  room: PropTypes.object.isRequired,
  getRooms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps, {
  getRooms
})(RoomsList);
