import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getRooms } from '../../redux/actions/roomActions';
import Header from '../../layout/Header';

const RoomsList = ({ room: { rooms }, getRooms }) => {
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <View>
      <Header title='hallotjes' />
      <FlatList>
        {!rooms && rooms.length === 0 ? (
          <Text>No logs to show...</Text>
        ) : (
          rooms.map(room => <Text key={room.id}>{room.name}</Text>)
        )}
      </FlatList>
    </View>
  );
};

RoomsList.propTypes = {
  room: PropTypes.object.isRequired,
  getRooms: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  room: state.room
});

export default connect(mapStateToProps, { getRooms })(RoomsList);
