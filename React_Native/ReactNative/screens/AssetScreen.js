import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';
import TicketList from '../components/tickets/TicketList';
import { setCurrentAsset } from '../redux/actions/assetActions';
import { getTickets } from '../redux/actions/ticketActions';
import Header from '../layout/Header';
import styles from './screenStyles';

const AssetScreen = ({
  navigation,
  asset: { current, added },
  ticket: { allTickets, changed },
  room,
  getTickets
}) => {
  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    getTickets();
  }, [changed, added]);

  return (
    <View style={styles.view}>
      <Header
        title={'Tickets of asset ' + current.name}
        goTo={current && room.current ? 'Rooms' : 'All Assets'}
      />
      <TicketList
        currentAsset={current}
        navigation={navigation}
        tickets={allTickets}
      />
      <FAB
        style={styles.fab}
        icon='plus'
        onPress={() =>
          navigation.navigate('TicketAddScreen', {
            assetNameParam: current.name
          })
        }
      />
    </View>
  );
};

AssetScreen.navigationOptions = {
  headerTitle: 'Asset screen'
};
AssetScreen.propTypes = {};

const mapStateToProps = state => ({
  asset: state.asset,
  ticket: state.ticket,
  room: state.room
});

export default connect(mapStateToProps, { setCurrentAsset, getTickets })(
  AssetScreen
);
