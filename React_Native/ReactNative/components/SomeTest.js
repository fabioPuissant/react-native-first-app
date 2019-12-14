import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getRooms } from '../redux/actions/roomActions';

const SomeTest = ({ room: { rooms }, getRooms }) => {
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <View>
      {!rooms && rooms.length === 0 ? (
        <Text>No logs to show...</Text>
      ) : (
        rooms.map(room => <Text key={log.id}>{room.name}</Text>)
      )}
    </View>
  );
};

SomeTest.propTypes = {
  room: PropTypes.object.isRequired,
  getRooms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps, { getRooms })(SomeTest);
