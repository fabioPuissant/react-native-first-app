import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import {
  getRooms,
  findRoomWithHappinessHigherThan
} from '../../redux/actions/roomActions';
import Header from '../../layout/Header';
import RoomItem from './RoomItem';

const RoomsList = ({
  room: { rooms },
  navigation,
  getRooms,
  findRoomWithHappinessHigherThan
}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(false);

  useEffect(() => {
    getRooms();
  }, []);

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
    //rooms = rooms.filter(r => r.happinessScore >= selectedNumber);
    findRoomWithHappinessHigherThan(selectedNumber);
    setConfirmed(false);
  } else {
    if (!enteredValue) {
      getRooms();
    }
  }

  return (
    <ScrollView>
      <Header title='All Rooms' />
      <Searchbar
        placeholder='Search rooms with score greather than...'
        onChangeText={numberInputHandler}
        onSubmitEditing={confirmInputHandler}
        value={enteredValue}
      />
      <View style={styles.centerHoriz}>
        {!rooms && rooms.length === 0 ? (
          <Text>No rooms to show...</Text>
        ) : (
          rooms.map(room => (
            <RoomItem navigation={navigation} room={room} key={room.id} />
          ))
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  centerHoriz: {
    padding: 20
  }
});
RoomsList.propTypes = {
  room: PropTypes.object.isRequired,
  getRooms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps, {
  getRooms,
  findRoomWithHappinessHigherThan
})(RoomsList);
