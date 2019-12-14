import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getRooms } from '../../redux/actions/roomActions';
import Header from '../../layout/Header';
import RoomItem from './RoomItem';

const RoomsList = ({ room: { rooms }, getRooms }) => {
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <View>
      <Header title='All Rooms' />
      <View style={styles.centerHoriz}>
        {!rooms && rooms.length === 0 ? (
          <Text>No rooms to show...</Text>
        ) : (
          rooms.map(room => <RoomItem room={room} key={room.id} />)
        )}
      </View>
    </View>
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

export default connect(mapStateToProps, { getRooms })(RoomsList);
